import type { Card } from '../../cards.type';
import type { GloomhavenClass } from '../../frosthaven-class.type';
import { cragheartCards } from './cards';

export const cragheart: GloomhavenClass<Card> = {
  game: 'Gloomhaven',
  name: 'Cragheart',
  handSize: 11,
  // Add icon assets under public/gloomhaven/cragheart/icons as gh-cragheart-color-icon.svg
  // and include matching `path` and `iconSize` settings once artwork is available.
  cards: cragheartCards,
};
