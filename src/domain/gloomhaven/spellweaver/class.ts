import type { Card } from '../../cards.type';
import type { GloomhavenClass } from '../../frosthaven-class.type';
import { spellweaverCards } from './cards';

export const spellweaver: GloomhavenClass<Card> = {
  game: 'Gloomhaven',
  name: 'Spellweaver',
  handSize: 8,
  // Add icon assets under public/gloomhaven/spellweaver/icons as gh-spellweaver-color-icon.svg
  // and update the `path` and `iconSize` values once available.
  cards: spellweaverCards,
};
