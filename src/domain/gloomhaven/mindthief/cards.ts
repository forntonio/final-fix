import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const mindthiefPath = '/gloomhaven/mindthief/abilities';

export const mindthiefCards: Card[] = createCards([
  { level: 1, name: 'empathetic assault', actions: { top: 'discard', bottom: 'discard' }, initiative: 12 },
  { level: 1, name: 'frigid apparition', actions: { top: 'discard', bottom: 'discard' }, initiative: 10 },
  { level: 1, name: 'hidden in the shadows', actions: { top: 'discard', bottom: 'discard' }, initiative: 14 },
  { level: 1, name: 'perverse edge', actions: { top: 'discard', bottom: 'discard' }, initiative: 8 },
  { level: 1, name: 'pilfer', actions: { top: 'discard', bottom: 'discard' }, initiative: 79 },
  { level: 1, name: 'psychic blade', actions: { top: 'discard', bottom: 'discard' }, initiative: 77 },
  { level: 1, name: 'scurry', actions: { top: 'discard', bottom: 'discard' }, initiative: 20 },
  { level: 1, name: 'submissive affliction', actions: { top: 'discard', bottom: 'discard' }, initiative: 48 },
  { level: 1, name: "the mind's weakness", actions: { top: 'discard', bottom: 'discard' }, initiative: 75 },
  { level: 1, name: 'withering claw', actions: { top: 'discard', bottom: 'discard' }, initiative: 18 },
  { level: 'X', name: 'feedback loops', actions: { top: 'discard', bottom: 'discard' }, initiative: 51 },
  { level: 'X', name: 'gnawing horde', actions: { top: 'discard', bottom: 'discard' }, initiative: 82 },
  { level: 'X', name: 'possession', actions: { top: 'discard', bottom: 'discard' }, initiative: 71 },
  { level: 2, name: 'fearsome blade', actions: { top: 'discard', bottom: 'discard' }, initiative: 27 },
  { level: 2, name: 'hostile takeover', actions: { top: 'discard', bottom: 'discard' }, initiative: 9 },
  { level: 3, name: 'brain leech', actions: { top: 'discard', bottom: 'discard' }, initiative: 21 },
  { level: 3, name: 'cranium overload', actions: { top: 'discard', bottom: 'discard' }, initiative: 5 },
  { level: 4, name: 'frozen shiv', actions: { top: 'discard', bottom: 'discard' }, initiative: 16 },
  { level: 4, name: 'silent scream', actions: { top: 'discard', bottom: 'discard' }, initiative: 83 },
  { level: 5, name: 'gangling abomination', actions: { top: 'discard', bottom: 'discard' }, initiative: 81 },
  { level: 5, name: 'mass hysteria', actions: { top: 'discard', bottom: 'discard' }, initiative: 11 },
  { level: 6, name: 'dark frenzy', actions: { top: 'discard', bottom: 'discard' }, initiative: 39 },
  { level: 6, name: 'telepathic command', actions: { top: 'discard', bottom: 'discard' }, initiative: 17 },
  { level: 7, name: 'domination', actions: { top: 'discard', bottom: 'discard' }, initiative: 13 },
  { level: 7, name: 'psychic projection', actions: { top: 'discard', bottom: 'discard' }, initiative: 92 },
  { level: 8, name: 'corrupting embrace', actions: { top: 'discard', bottom: 'discard' }, initiative: 15 },
  { level: 8, name: 'shared nightmare', actions: { top: 'discard', bottom: 'discard' }, initiative: 7 },
  { level: 9, name: 'many as one', actions: { top: 'discard', bottom: 'discard' }, initiative: 91 },
  { level: 9, name: 'phantasmal killer', actions: { top: 'discard', bottom: 'discard' }, initiative: 67 },
], mindthiefPath, { imagePrefix: 'gh2-', imageAvailable: false });
