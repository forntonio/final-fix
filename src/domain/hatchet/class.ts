import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { hatchetCards } from './cards';

export function isHatchet(fhClass: KnownClass<Card>): fhClass is FrosthavenClass<Card> {
  return fhClass.game === 'Frosthaven' && fhClass.name === 'Hatchet';
}

export const hatchet: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Hatchet',
  handSize: 10,
  path: '/hatchet/icons/fh-hatchet-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: hatchetCards,
};
