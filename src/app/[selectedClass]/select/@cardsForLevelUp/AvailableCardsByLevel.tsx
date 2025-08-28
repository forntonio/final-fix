'use client';

import CardPile from '@/app/_components/cards/CardPile';
import BoardArea from '@/app/_components/layout/BoardArea';
import type { Card } from '@/domain/cards.type';
import { useSelectCards } from '@/app/[selectedClass]/select/useSelectCards';
import { useFrosthavenStore } from '@/stores/cards.store';
import { ClassContext } from '@/context/ClassContext';
import { use, useCallback, useMemo } from 'react';

export default function AvailableCardsByLevel<X extends Card>({
  level,
}: {
  level: X['level'];
}) {
  const availableCards = useFrosthavenStore((state) => state.availableCards as X[]);
  const currentClass = use(ClassContext);
  const { cards, selectCard } = useSelectCards<X>();

  const selectAction = useCallback((card: X) => [{
    name: 'Select Card',
    onClick: () => selectCard(card),
  }], [selectCard]);

  const levelCards = useMemo(
    () => availableCards.filter((card: X) => level === card.level),
    [availableCards, level],
  );

  const remainingCards = useMemo(
    () => levelCards.filter((card) => cards.every(({ path }) => path !== card.path)),
    [levelCards, cards],
  );

  const maxCardLength = useMemo(
    () => currentClass.cards.filter((card: Card) => level === card.level).length,
    [currentClass.cards, level],
  );

  return <BoardArea title={`Cards level ${level}`}>
    <CardPile
      cards={remainingCards}
      actions={selectAction}
      maxCardLength={maxCardLength}
    />
  </BoardArea>;
}
