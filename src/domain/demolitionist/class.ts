import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { demolitionistCards } from './cards';

export function isDemolitionist(fhClass: FrosthavenClass<Card>): boolean {
  return fhClass.name === 'Demolitionist';
}

export const demolitionist: FrosthavenClass<Card> = {
  name: 'Demolitionist',
  handSize: 9,
  path: '/demolitionist/icons/fh-demolitionist-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: demolitionistCards,
};
