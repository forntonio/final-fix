import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { demolitionistCards } from './cards';

export function isDemolitionist(fhClass: KnownClass<Card>): fhClass is FrosthavenClass<Card> {
  return fhClass.game === 'Frosthaven' && fhClass.name === 'Demolitionist';
}

export const demolitionist: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Demolitionist',
  handSize: 9,
  path: '/demolitionist/icons/fh-demolitionist-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  cards: demolitionistCards,
};
