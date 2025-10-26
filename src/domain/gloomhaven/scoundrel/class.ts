import type { Card } from '../../cards.type';
import type { GloomhavenClass } from '../../frosthaven-class.type';
import { scoundrelCards } from './cards';

export const scoundrel: GloomhavenClass<Card> = {
  game: 'Gloomhaven',
  name: 'Scoundrel',
  handSize: 9,
  // Add icon assets under public/gloomhaven/scoundrel/icons as gh-scoundrel-color-icon.svg
  // and provide `path` plus `iconSize` details in this definition when ready.
  cards: scoundrelCards,
};
