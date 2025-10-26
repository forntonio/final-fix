import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const tinkererPath = '/gloomhaven/tinkerer/abilities';

export const tinkererCards: Card[] = createCards([
  { level: 1, name: 'disorienting flash', actions: { top: 'discard', bottom: 'discard' }, initiative: 73 },
  { level: 1, name: 'enhancement field', actions: { top: 'discard', bottom: 'discard' }, initiative: 61 },
  { level: 1, name: 'flamethrower', actions: { top: 'discard', bottom: 'discard' }, initiative: 16 },
  { level: 1, name: 'harmless contraption', actions: { top: 'discard', bottom: 'discard' }, initiative: 74 },
  { level: 1, name: 'ink bomb', actions: { top: 'discard', bottom: 'discard' }, initiative: 80 },
  { level: 1, name: 'jet propulsion', actions: { top: 'discard', bottom: 'discard' }, initiative: 34 },
  { level: 1, name: 'net shooter', actions: { top: 'discard', bottom: 'discard' }, initiative: 19 },
  { level: 1, name: 'potent potables', actions: { top: 'discard', bottom: 'discard' }, initiative: 46 },
  { level: 1, name: 'reinvigorating elixir', actions: { top: 'discard', bottom: 'discard' }, initiative: 37 },
  { level: 1, name: 'restorative mist', actions: { top: 'discard', bottom: 'discard' }, initiative: 17 },
  { level: 1, name: 'stun shot', actions: { top: 'discard', bottom: 'discard' }, initiative: 20 },
  { level: 1, name: 'toxic bolt', actions: { top: 'discard', bottom: 'discard' }, initiative: 76 },
  { level: 'X', name: 'gas canister', actions: { top: 'discard', bottom: 'discard' }, initiative: 22 },
  { level: 'X', name: 'hook gun', actions: { top: 'discard', bottom: 'discard' }, initiative: 72 },
  { level: 'X', name: 'volatile concoction', actions: { top: 'discard', bottom: 'discard' }, initiative: 18 },
  { level: 2, name: 'crank bow', actions: { top: 'discard', bottom: 'discard' }, initiative: 23 },
  { level: 2, name: 'repulsor gun', actions: { top: 'discard', bottom: 'discard' }, initiative: 35 },
  { level: 3, name: 'stamina booster', actions: { top: 'discard', bottom: 'discard' }, initiative: 48 },
  { level: 3, name: 'teleportation pad', actions: { top: 'discard', bottom: 'discard' }, initiative: 62 },
  { level: 4, name: 'dangerous contraption', actions: { top: 'discard', bottom: 'discard' }, initiative: 10 },
  { level: 4, name: 'proximity mine', actions: { top: 'discard', bottom: 'discard' }, initiative: 14 },
  { level: 5, name: 'disintegration beam', actions: { top: 'discard', bottom: 'discard' }, initiative: 36 },
  { level: 5, name: 'noxious vials', actions: { top: 'discard', bottom: 'discard' }, initiative: 75 },
  { level: 6, name: 'auto turret', actions: { top: 'discard', bottom: 'discard' }, initiative: 32 },
  { level: 6, name: 'invigorating aerosol', actions: { top: 'discard', bottom: 'discard' }, initiative: 21 },
  { level: 7, name: 'murderous contraption', actions: { top: 'discard', bottom: 'discard' }, initiative: 84 },
  { level: 7, name: 'pernicious fogger', actions: { top: 'discard', bottom: 'discard' }, initiative: 71 },
  { level: 8, name: 'cryonic snare', actions: { top: 'discard', bottom: 'discard' }, initiative: 15 },
  { level: 8, name: 'harsh stimulants', actions: { top: 'discard', bottom: 'discard' }, initiative: 27 },
  { level: 9, name: 'chimeric formula', actions: { top: 'discard', bottom: 'discard' }, initiative: 33 },
  { level: 9, name: 'gravity bomb', actions: { top: 'discard', bottom: 'discard' }, initiative: 85 },
], tinkererPath, { imagePrefix: 'gh2-', imageAvailable: false });
