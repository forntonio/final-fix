import type { Card } from '../../cards.type';
import type { FrosthavenClass } from '../../frosthaven-class.type';
import { mindthiefCards } from './cards';

export const mindthief: FrosthavenClass<Card> = {
  name: 'Mindthief',
  handSize: 10,
  path: '/gloomhaven/mindthief/icons/gh2-mindthief-color-icon.svg',
  iconSize: { width: 600, height: 600 },
  iconAvailable: false,
  cards: mindthiefCards,
};
