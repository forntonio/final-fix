import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const cragheartPath = '/gloomhaven/cragheart/abilities';

export const cragheartCards: Card[] = createCards([
  { level: 1, name: 'avalanche', actions: { top: 'discard', bottom: 'discard' }, initiative: 75 },
  { level: 1, name: 'backup ammunition', actions: { top: 'discard', bottom: 'discard' }, initiative: 77 },
  { level: 1, name: 'crater', actions: { top: 'discard', bottom: 'discard' }, initiative: 61 },
  { level: 1, name: 'crushing grasp', actions: { top: 'discard', bottom: 'discard' }, initiative: 35 },
  { level: 1, name: 'dirt tornado', actions: { top: 'discard', bottom: 'discard' }, initiative: 82 },
  { level: 1, name: 'earthen bulwark', actions: { top: 'discard', bottom: 'discard' }, initiative: 41 },
  { level: 1, name: 'earthen clod', actions: { top: 'discard', bottom: 'discard' }, initiative: 24 },
  { level: 1, name: 'massive boulder', actions: { top: 'discard', bottom: 'discard' }, initiative: 87 },
  { level: 1, name: 'opposing strike', actions: { top: 'discard', bottom: 'discard' }, initiative: 46 },
  { level: 1, name: 'rumbling advance', actions: { top: 'discard', bottom: 'discard' }, initiative: 38 },
  { level: 1, name: 'unstable upheaval', actions: { top: 'discard', bottom: 'discard' }, initiative: 13 },
  { level: 'X', name: 'burrow', actions: { top: 'discard', bottom: 'discard' }, initiative: 94 },
  { level: 'X', name: 'heaving swing', actions: { top: 'discard', bottom: 'discard' }, initiative: 57 },
  { level: 'X', name: 'petrify', actions: { top: 'discard', bottom: 'discard' }, initiative: 53 },
  { level: 2, name: 'mud eruption', actions: { top: 'discard', bottom: 'discard' }, initiative: 25 },
  { level: 2, name: 'sentient growth', actions: { top: 'discard', bottom: 'discard' }, initiative: 78 },
  { level: 3, name: 'blunt force', actions: { top: 'discard', bottom: 'discard' }, initiative: 21 },
  { level: 3, name: 'clear the way', actions: { top: 'discard', bottom: 'discard' }, initiative: 30 },
  { level: 4, name: 'kinetic assault', actions: { top: 'discard', bottom: 'discard' }, initiative: 19 },
  { level: 4, name: 'rock slide', actions: { top: 'discard', bottom: 'discard' }, initiative: 81 },
  { level: 5, name: 'solidify', actions: { top: 'discard', bottom: 'discard' }, initiative: 17 },
  { level: 5, name: 'stone pummel', actions: { top: 'discard', bottom: 'discard' }, initiative: 32 },
  { level: 6, name: 'cataclysm', actions: { top: 'discard', bottom: 'discard' }, initiative: 26 },
  { level: 6, name: 'dig pit', actions: { top: 'discard', bottom: 'discard' }, initiative: 88 },
  { level: 7, name: 'brutal momentum', actions: { top: 'discard', bottom: 'discard' }, initiative: 37 },
  { level: 7, name: 'meteor', actions: { top: 'discard', bottom: 'discard' }, initiative: 85 },
  { level: 8, name: 'entomb', actions: { top: 'discard', bottom: 'discard' }, initiative: 23 },
  { level: 8, name: 'rocky end', actions: { top: 'discard', bottom: 'discard' }, initiative: 31 },
  { level: 9, name: "earth's embrace", actions: { top: 'discard', bottom: 'discard' }, initiative: 52 },
  { level: 9, name: 'wave of destruction', actions: { top: 'discard', bottom: 'discard' }, initiative: 74 },
], cragheartPath, { imagePrefix: 'gh2-', imageAvailable: false });
