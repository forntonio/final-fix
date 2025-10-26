import type { Card } from '../../cards.type';
import type { FrosthavenClass } from '../../frosthaven-class.type';
import { bruteCards } from './cards';

export const brute: FrosthavenClass<Card> = {
  name: 'Brute',
  handSize: 10,
  path: '/gloomhaven/brute/icons/gh2-brute-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  iconAvailable: false,
  cards: bruteCards,
};
