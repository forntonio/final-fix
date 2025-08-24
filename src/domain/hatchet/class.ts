import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { hatchetCards } from './cards';

export function isHatchet(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === 'Hatchet';
}

export const hatchet: FrosthavenClass<Card> = {
  name: 'Hatchet',
  handSize: 10,
  path: '/hatchet/icons/fh-hatchet-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: hatchetCards,
};
