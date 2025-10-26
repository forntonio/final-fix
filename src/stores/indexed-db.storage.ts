import type { StateStorage } from 'zustand/middleware';
import type { Card } from '@/domain/cards.type';
import type { PersistedCard } from './cards.store';
import type { KnownClass } from '@/domain/frosthaven-class.type';
import { del, get, put, startTransaction } from './indexed-db';
import { allClasses, classURIToName } from '@/domain/frosthaven-class';
import type { HiveCard } from '@/domain/hive/cards';

function getClass<X extends Card>() {
  const selectedClassName = classURIToName(document.location.pathname.split('/')[1] as KnownClass<X>['name']);
  return allClasses.find(({ name }) => name === selectedClassName) as KnownClass<X>;
}

function departializeCardForClass<X extends HiveCard>(gameClass: KnownClass<X>) {
  return ({
    name,
    status,
    tokenPosition,
    enhancements,
    isSelectedMode,
  }: PersistedCard): X => {
    const card = gameClass.cards.find((card) => card.name === name);
    if (!card) {
      throw new Error(`Card ${name} not found in ${gameClass.name}`);
    }
    return {
      ...card,
      status,
      tokenPosition,
      enhancements,
      isSelectedMode,
    };
  };
}

export const indexedDBStorage: StateStorage = {
  getItem: async (): Promise<string | null> => {
    const selectedClass = getClass();
    if (!selectedClass) {
      return null;
    }
    const transaction = await startTransaction();
    const result = await get(transaction)(selectedClass.name);
    if (!result) {
      return null;
    }
    const departializeCard = departializeCardForClass(selectedClass);
    const {
      cards, availableCards, states, ...state
    } = result;
    return JSON.stringify({
      state: {
        ...state,
        cards: cards.map(departializeCard),
        availableCards: (availableCards.length === 0 ? selectedClass.cards : availableCards)
          .map(departializeCard),
        states: states.map((state) => state.map(departializeCard)),
      }
    });
  },
  setItem: async (_name: string, value: string): Promise<void> => {
    const selectedClass = getClass();
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    await put(transaction)(selectedClass.name, value);
  },
  removeItem: async (): Promise<void> => {
    const selectedClass = getClass();
    if (!selectedClass) {
      return;
    }
    const transaction = await startTransaction();
    await del(transaction)(selectedClass.name);
  },
};
