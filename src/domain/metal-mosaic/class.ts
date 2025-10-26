import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { metalMosaicCards } from './cards';

export type MetalMosaicPressure = 'low' | 'regular' | 'high' | 'over';
export const pressures: MetalMosaicPressure[] = ['regular', 'high', 'over', 'low'] as const;

export function isMetalMosaic(fhClass: KnownClass<Card>): fhClass is FrosthavenClass<Card> {
  return fhClass.game === 'Frosthaven' && fhClass.name === 'Metal Mosaic';
}

export const metalMosaic: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Metal Mosaic',
  handSize: 9,
  path: '/metal-mosaic/icons/fh-metal-mosaic-color-icon.svg',
  iconSize: { width: 412, height: 600 },
  cards: metalMosaicCards,
};
