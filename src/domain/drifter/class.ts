import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { drifterCards } from './cards';

export function isDrifter(frosthavenClass: KnownClass<Card>): frosthavenClass is FrosthavenClass<Card> {
  return frosthavenClass.game === 'Frosthaven' && frosthavenClass.name === 'Drifter';
}

export const drifter: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Drifter',
  handSize: 12,
  path: '/drifter/icons/fh-drifter-color-icon.svg',
  iconSize: { width: 448, height: 600 },
  cards: drifterCards,
};
