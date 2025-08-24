import type { CardStatus, Card } from '@/domain/cards.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';

export type Action = 'top' | 'bottom' | 'default';

function newStatusAfterAction(cardActions: Card['actions'], action: Action): CardStatus {
  if (action === 'default') {
    return 'discarded';
  }
  const cardAction = cardActions[action];
  switch (cardAction) {
    case 'discard':
      return 'discarded';
    case 'lose':
      return 'lost';
    case 'activeDiscard':
    case 'activeLost':
      return action === 'top' ? 'activeTop' : 'activeBottom';
  }
}

export function useCards<X extends Card>() {
  const {
    states,
    updateStates,
    currentStateIndex,
    setStateIndex,
    selectedActions,
    setSelectedActions,
  } = useFrosthavenStore(useShallow((store) => ({
    states: store.states,
    updateStates: store.updateStates,
    currentStateIndex: store.currentStateIndex,
    setStateIndex: store.setStateIndex,
    selectedActions: store.selectedActions,
    setSelectedActions: store.setSelectedActions,
  })));
  const currentCards = useMemo(() => states[currentStateIndex] as X[], [states, currentStateIndex]);

  const changeCardStatus = (newStatus: CardStatus, condition?: () => boolean) => (card: X) => {
    if (condition && !condition()) return;
    const otherCards = currentCards.filter(c => c !== card);
    const newState = [...otherCards, { ...card, status: newStatus }];
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  };

  const selectCard = (card: X) => {
    const selectedCount = currentCards.filter(c => c.status === 'selected').length;
    if (selectedCount >= 2) return;

    const otherCards = currentCards.filter(c => c !== card);
    const newState = [...otherCards, { ...card, status: 'selected' }];
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);

    if (selectedCount === 0) {
      setSelectedActions([undefined, undefined]);
    } else {
      setSelectedActions(
        selectedActions.with(selectedCount as 0 | 1, undefined) as typeof selectedActions,
      );
    }
  };
  const discardCard = changeCardStatus('discarded');
  const loseCard = changeCardStatus('lost');
  const recoverCard = changeCardStatus('inHand');

  const playCards = (cardsPlayed: { action: Action; card: X }[]) => {
    const newState = [
      ...currentCards.filter(card => !cardsPlayed.map(({ card }) => card.name).includes(card.name)),
      ...cardsPlayed.map(({ action, card }) => ({ ...card, status: newStatusAfterAction(card.actions, action) })),
    ];

    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  };

  const makeRest = (lost: X) => {
    const recovered = currentCards
      .filter(({ status }) => status === 'discarded')
      .filter(({ name }) => name !== lost.name);

    const newState = [
      ...currentCards.filter(c => c.status !== 'discarded'),
      ...recovered.map(c => ({ ...c, status: 'inHand' })),
      { ...lost, status: 'lost' },
    ];
    updateStates([...states.slice(0, currentStateIndex + 1), newState]);
  };

  const undo = () => {
    if (currentStateIndex === 0) return;
    setStateIndex(currentStateIndex - 1);
  };

  const redo = () => {
    if (currentStateIndex === states.length - 1) return;
    setStateIndex(currentStateIndex + 1);
  };

  return {
    currentCards,
    selectCard,
    playCards,
    discardCard,
    loseCard,
    recoverCard,
    makeRest,
    undo,
    redo,
    setSelectedActions,
  };
}