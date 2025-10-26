import type { Card } from '../../cards.type';
import type { GloomhavenClass } from '../../frosthaven-class.type';
import { bruteCards } from './cards';

export const brute: GloomhavenClass<Card> = {
  game: 'Gloomhaven',
  name: 'Brute',
  handSize: 10,
  // Add icon assets under public/gloomhaven/brute/icons as gh-brute-color-icon.svg
  // and define `path` plus `iconSize` once artwork is available.
  cards: bruteCards,
};
