import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { redGuardCards } from './cards';

export function isRedGuard(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === 'Red Guard';
}

export const redGuard: FrosthavenClass<Card> = {
  name: 'Red Guard',
  handSize: 10,
  path: '/red-guard/icons/fh-red-guard-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: redGuardCards,
};
