import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { deepwraithCards } from './cards';

export const deepwraith: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Deepwraith',
  handSize: 10,
  path: '/deepwraith/icons/fh-deepwraith-color-icon.svg',
  iconSize: { width: 478, height: 600 },
  cards: deepwraithCards,
};
