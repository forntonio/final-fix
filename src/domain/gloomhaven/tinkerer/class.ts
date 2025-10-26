import type { Card } from '../../cards.type';
import type { GloomhavenClass } from '../../frosthaven-class.type';
import { tinkererCards } from './cards';

export const tinkerer: GloomhavenClass<Card> = {
  game: 'Gloomhaven',
  name: 'Tinkerer',
  handSize: 12,
  // Add icon assets under public/gloomhaven/tinkerer/icons as gh-tinkerer-color-icon.svg
  // and set the `path` and `iconSize` when ready.
  cards: tinkererCards,
};
