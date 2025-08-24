import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { voidwardenCards } from './cards';

export function isVoidwarden(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === 'Voidwarden';
}

export const voidwarden: FrosthavenClass<Card> = {
  name: 'Voidwarden',
  handSize: 11,
  path: '/voidwarden/icons/fh-voidwarden-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: voidwardenCards,
};
