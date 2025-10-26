import type { Card } from '../../cards.type';
import type { FrosthavenClass } from '../../frosthaven-class.type';
import { cragheartCards } from './cards';

export const cragheart: FrosthavenClass<Card> = {
  name: 'Cragheart',
  handSize: 11,
  path: '/gloomhaven/cragheart/icons/gh2-cragheart-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  iconAvailable: false,
  cards: cragheartCards,
};
