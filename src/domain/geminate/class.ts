import type { Card } from '../cards.type';
import { type FrosthavenClass, type KnownClass } from '../frosthaven-class.type';
import { GeminateCard, geminateCards } from './cards';

export function isGeminate(frosthavenClass: KnownClass<Card>): frosthavenClass is FrosthavenClass<GeminateCard> {
  return frosthavenClass.game === 'Frosthaven' && frosthavenClass.name === 'Geminate';
}

export function isGeminateCards(fhClass: KnownClass<Card>, cards: Card[]): cards is GeminateCard[] {
  return isGeminate(fhClass);
}

export const geminate: FrosthavenClass<GeminateCard> = {
  game: 'Frosthaven',
  name: 'Geminate',
  handSize: 14,
  path: '/geminate/icons/fh-geminate-color-icon.svg',
  iconSize: { width: 582, height: 600 },
  cards: geminateCards,
};
