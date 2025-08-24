import { createCards } from '../card.factory';
import type { Card } from '../cards.type';

const redGuardPath = '/red-guard/abilities';

export const redGuardCards: Card[] = createCards([
  { level: 2, name: 'barbaric instincts', actions: { top: 'discard', bottom: 'discard' }, initiative: 12 },
  { level: 'X', name: 'blade dance', actions: { top: 'discard', bottom: 'discard' }, initiative: 29 },
  { level: 1, name: 'blinding sickle', actions: { top: 'discard', bottom: 'discard' }, initiative: 87 },
  { level: 4, name: 'burn away the dark', actions: { top: 'discard', bottom: 'discard' }, initiative: 31 },
  { level: 1, name: 'desert night', actions: { top: 'discard', bottom: 'discard' }, initiative: 90 },
  { level: 6, name: 'fierce brilliance', actions: { top: 'discard', bottom: 'discard' }, initiative: 22 },
  { level: 1, name: 'flame shroud', actions: { top: 'discard', bottom: 'discard' }, initiative: 6 },
  { level: 1, name: 'flaming sickle', actions: { top: 'discard', bottom: 'discard' }, initiative: 63 },
  { level: 6, name: 'flying sickle', actions: { top: 'discard', bottom: 'discard' }, initiative: 91 },
  { level: 2, name: 'harvest sickle', actions: { top: 'discard', bottom: 'discard' }, initiative: 52 },
  { level: 1, name: 'healing sands', actions: { top: 'discard', bottom: 'discard' }, initiative: 32 },
  { level: 9, name: 'honorable fury', actions: { top: 'discard', bottom: 'discard' }, initiative: 89 },
  { level: 7, name: 'horns of the beast', actions: { top: 'discard', bottom: 'discard' }, initiative: 8 },
  { level: 8, name: 'no fear', actions: { top: 'discard', bottom: 'discard' }, initiative: 1 },
  { level: 'X', name: 'precision strike', actions: { top: 'discard', bottom: 'discard' }, initiative: 40 },
  { level: 8, name: 'prismatic sickle', actions: { top: 'discard', bottom: 'discard' }, initiative: 70 },
  { level: 4, name: 'radiant sickle', actions: { top: 'discard', bottom: 'discard' }, initiative: 79 },
  { level: 5, name: 'sand devil', actions: { top: 'discard', bottom: 'discard' }, initiative: 55 },
  { level: 1, name: 'shield of the desert', actions: { top: 'discard', bottom: 'discard' }, initiative: 10 },
  { level: 1, name: 'shield spikes', actions: { top: 'discard', bottom: 'discard' }, initiative: 41 },
  { level: 1, name: 'shocking advance', actions: { top: 'discard', bottom: 'discard' }, initiative: 14 },
  { level: 9, name: 'soaring shield', actions: { top: 'discard', bottom: 'discard' }, initiative: 11 },
  { level: 3, name: 'strangling chain', actions: { top: 'discard', bottom: 'discard' }, initiative: 19 },
  { level: 1, name: 'swift strength', actions: { top: 'discard', bottom: 'discard' }, initiative: 16 },
  { level: 1, name: 'twirling stabs', actions: { top: 'discard', bottom: 'discard' }, initiative: 38 },
  { level: 7, name: 'vicious ballet', actions: { top: 'discard', bottom: 'discard' }, initiative: 28 },
  { level: 3, name: 'warmth of the sun', actions: { top: 'discard', bottom: 'discard' }, initiative: 23 },
  { level: 'X', name: 'warrior of the sun', actions: { top: 'discard', bottom: 'discard' }, initiative: 13 }
], redGuardPath);
