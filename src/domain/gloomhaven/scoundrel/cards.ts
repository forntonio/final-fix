import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const scoundrelPath = '/gloomhaven/scoundrel/abilities';

export const scoundrelCards: Card[] = createCards([
  { level: 1, name: 'flanking strike', actions: { top: 'discard', bottom: 'discard' }, initiative: 4 },
  { level: 1, name: 'practiced reflexes', actions: { top: 'discard', bottom: 'discard' }, initiative: 64 },
  { level: 1, name: 'quick hands', actions: { top: 'discard', bottom: 'discard' }, initiative: 23 },
  { level: 1, name: 'single out', actions: { top: 'discard', bottom: 'discard' }, initiative: 86 },
  { level: 1, name: 'sinister opportunity', actions: { top: 'discard', bottom: 'discard' }, initiative: 93 },
  { level: 1, name: 'special mixture', actions: { top: 'discard', bottom: 'discard' }, initiative: 33 },
  { level: 1, name: 'swift bow', actions: { top: 'discard', bottom: 'discard' }, initiative: 36 },
  { level: 1, name: 'throwing knives', actions: { top: 'discard', bottom: 'discard' }, initiative: 10 },
  { level: 1, name: 'venom shiv', actions: { top: 'discard', bottom: 'discard' }, initiative: 8 },
  { level: 'X', name: 'backstab', actions: { top: 'discard', bottom: 'discard' }, initiative: 6 },
  { level: 'X', name: 'smoke bomb', actions: { top: 'discard', bottom: 'discard' }, initiative: 12 },
  { level: 'X', name: "trickster's reversal", actions: { top: 'discard', bottom: 'discard' }, initiative: 9 },
  { level: 2, name: 'open wound', actions: { top: 'discard', bottom: 'discard' }, initiative: 11 },
  { level: 2, name: 'stick to the shadows', actions: { top: 'discard', bottom: 'discard' }, initiative: 26 },
  { level: 3, name: 'flintlock', actions: { top: 'discard', bottom: 'discard' }, initiative: 51 },
  { level: 3, name: 'hidden daggers', actions: { top: 'discard', bottom: 'discard' }, initiative: 39 },
  { level: 4, name: 'flurry of blades', actions: { top: 'discard', bottom: 'discard' }, initiative: 16 },
  { level: 4, name: 'gruesome advantage', actions: { top: 'discard', bottom: 'discard' }, initiative: 90 },
  { level: 5, name: "duelist's advantage", actions: { top: 'discard', bottom: 'discard' }, initiative: 7 },
  { level: 5, name: 'serrated arrow', actions: { top: 'discard', bottom: 'discard' }, initiative: 95 },
  { level: 6, name: 'cull the weak', actions: { top: 'discard', bottom: 'discard' }, initiative: 62 },
  { level: 6, name: 'dance of daggers', actions: { top: 'discard', bottom: 'discard' }, initiative: 3 },
  { level: 7, name: 'spring the trap', actions: { top: 'discard', bottom: 'discard' }, initiative: 13 },
  { level: 7, name: 'stiletto storm', actions: { top: 'discard', bottom: 'discard' }, initiative: 80 },
  { level: 8, name: 'crippling poison', actions: { top: 'discard', bottom: 'discard' }, initiative: 4 },
  { level: 8, name: 'visage of the inevitable', actions: { top: 'discard', bottom: 'discard' }, initiative: 88 },
  { level: 9, name: 'hired help', actions: { top: 'discard', bottom: 'discard' }, initiative: 2 },
  { level: 9, name: 'watch it burn', actions: { top: 'discard', bottom: 'discard' }, initiative: 98 },
], scoundrelPath, { imagePrefix: 'gh2-', imageAvailable: false });
