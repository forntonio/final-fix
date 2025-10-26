import type { Card } from '../../cards.type';
import type { FrosthavenClass } from '../../frosthaven-class.type';
import { scoundrelCards } from './cards';

export const scoundrel: FrosthavenClass<Card> = {
  name: 'Scoundrel',
  handSize: 9,
  path: '/gloomhaven/scoundrel/icons/gh2-scoundrel-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  iconAvailable: false,
  cards: scoundrelCards,
};
