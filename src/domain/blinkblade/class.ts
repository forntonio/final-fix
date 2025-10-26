import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { blinkbladeCards } from './cards';

export function isBlinkblade(fhClass: KnownClass<Card>): fhClass is FrosthavenClass<Card> {
  return fhClass.game === 'Frosthaven' && fhClass.name === 'Blinkblade';
}

export type BlinkbladeSpeed = 'slow' | 'fast';
export const speeds: BlinkbladeSpeed[] = ['slow', 'fast'] as const;

export const blinkblade: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Blinkblade',
  handSize: 10,
  path: '/blinkblade/icons/fh-blinkblade-color-icon.svg',
  iconSize: { width: 600, height: 487 },
  cards: blinkbladeCards,
};
