import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { voidwardenCards } from './cards';

export function isVoidwarden(fhClass: KnownClass<Card>): fhClass is FrosthavenClass<Card> {
  return fhClass.game === 'Frosthaven' && fhClass.name === 'Voidwarden';
}

export const voidwarden: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Voidwarden',
  handSize: 11,
  path: '/voidwarden/icons/fh-voidwarden-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: voidwardenCards,
};
