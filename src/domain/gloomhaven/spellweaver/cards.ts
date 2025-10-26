import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const spellweaverPath = '/gloomhaven/spellweaver/abilities';

export const spellweaverCards: Card[] = createCards([
  { level: 1, name: 'aid from the ether', actions: { top: 'discard', bottom: 'discard' }, initiative: 36 },
  { level: 1, name: 'arcane bolt', actions: { top: 'discard', bottom: 'discard' }, initiative: 70 },
  { level: 1, name: 'emberfrost', actions: { top: 'discard', bottom: 'discard' }, initiative: 7 },
  { level: 1, name: 'fire orbs', actions: { top: 'discard', bottom: 'discard' }, initiative: 69 },
  { level: 1, name: 'flame strike', actions: { top: 'discard', bottom: 'discard' }, initiative: 26 },
  { level: 1, name: 'frost strike', actions: { top: 'discard', bottom: 'discard' }, initiative: 78 },
  { level: 1, name: 'icy blast', actions: { top: 'discard', bottom: 'discard' }, initiative: 20 },
  { level: 1, name: 'reviving ether', actions: { top: 'discard', bottom: 'discard' }, initiative: 80 },
  { level: 'X', name: 'flameswell', actions: { top: 'discard', bottom: 'discard' }, initiative: 83 },
  { level: 'X', name: 'ice armor', actions: { top: 'discard', bottom: 'discard' }, initiative: 25 },
  { level: 'X', name: 'impaling eruption', actions: { top: 'discard', bottom: 'discard' }, initiative: 91 },
  { level: 2, name: 'etheric echo', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 2, name: 'freezing nova', actions: { top: 'discard', bottom: 'discard' }, initiative: 22 },
  { level: 3, name: 'arctic shards', actions: { top: 'discard', bottom: 'discard' }, initiative: 24 },
  { level: 3, name: 'heatwave', actions: { top: 'discard', bottom: 'discard' }, initiative: 12 },
  { level: 4, name: 'cold fire', actions: { top: 'discard', bottom: 'discard' }, initiative: 67 },
  { level: 4, name: 'dancing gales', actions: { top: 'discard', bottom: 'discard' }, initiative: 33 },
  { level: 5, name: 'cool down', actions: { top: 'discard', bottom: 'discard' }, initiative: 30 },
  { level: 5, name: 'warm up', actions: { top: 'discard', bottom: 'discard' }, initiative: 60 },
  { level: 6, name: 'elemental rays', actions: { top: 'discard', bottom: 'discard' }, initiative: 15 },
  { level: 6, name: 'searing glacier', actions: { top: 'discard', bottom: 'discard' }, initiative: 90 },
  { level: 7, name: 'chromatic explosion', actions: { top: 'discard', bottom: 'discard' }, initiative: 10 },
  { level: 7, name: 'spell mastery', actions: { top: 'discard', bottom: 'discard' }, initiative: 71 },
  { level: 8, name: 'frostflare orbs', actions: { top: 'discard', bottom: 'discard' }, initiative: 46 },
  { level: 8, name: 'twin beams', actions: { top: 'discard', bottom: 'discard' }, initiative: 19 },
  { level: 9, name: 'freezing vortex', actions: { top: 'discard', bottom: 'discard' }, initiative: 41 },
  { level: 9, name: 'inferno', actions: { top: 'discard', bottom: 'discard' }, initiative: 96 },
], spellweaverPath, { imagePrefix: 'gh2-', imageAvailable: false });
