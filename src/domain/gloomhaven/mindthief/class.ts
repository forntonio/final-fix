import type { Card } from '../../cards.type';
import type { GloomhavenClass } from '../../frosthaven-class.type';
import { mindthiefCards } from './cards';

export const mindthief: GloomhavenClass<Card> = {
  game: 'Gloomhaven',
  name: 'Mindthief',
  handSize: 10,
  // Add icon assets under public/gloomhaven/mindthief/icons as gh-mindthief-color-icon.svg
  // and set the `path` together with `iconSize` metadata once available.
  cards: mindthiefCards,
};
