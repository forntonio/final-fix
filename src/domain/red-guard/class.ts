import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { redGuardCards } from './cards';

export function isRedGuard(fhClass: KnownClass<Card>): fhClass is FrosthavenClass<Card> {
  return fhClass.game === 'Frosthaven' && fhClass.name === 'Red Guard';
}

export const redGuard: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Red Guard',
  handSize: 10,
  path: '/red-guard/icons/fh-red-guard-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: redGuardCards,
};
