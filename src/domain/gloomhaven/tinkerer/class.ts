import type { Card } from '../../cards.type';
import type { FrosthavenClass } from '../../frosthaven-class.type';
import { tinkererCards } from './cards';

export const tinkerer: FrosthavenClass<Card> = {
  name: 'Tinkerer',
  handSize: 12,
  path: '/gloomhaven/tinkerer/icons/gh2-tinkerer-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  iconAvailable: false,
  cards: tinkererCards,
};
