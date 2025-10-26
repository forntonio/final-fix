import type { Card } from '../../cards.type';
import type { FrosthavenClass } from '../../frosthaven-class.type';
import { spellweaverCards } from './cards';

export const spellweaver: FrosthavenClass<Card> = {
  name: 'Spellweaver',
  handSize: 8,
  path: '/gloomhaven/spellweaver/icons/gh2-spellweaver-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  iconAvailable: false,
  cards: spellweaverCards,
};
