import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const brutePath = '/gloomhaven/brute/abilities';

export const bruteCards: Card[] = createCards([
  { level: 1, name: 'balanced measure', actions: { top: 'discard', bottom: 'discard' }, initiative: 20 },
  { level: 1, name: 'eye for an eye', actions: { top: 'discard', bottom: 'discard' }, initiative: 13 },
  { level: 1, name: 'grab and go', actions: { top: 'discard', bottom: 'discard' }, initiative: 87 },
  { level: 1, name: 'leaping cleave', actions: { top: 'discard', bottom: 'discard' }, initiative: 54 },
  { level: 1, name: 'overwhelming assault', actions: { top: 'discard', bottom: 'discard' }, initiative: 61 },
  { level: 1, name: 'shield bash', actions: { top: 'discard', bottom: 'discard' }, initiative: 15 },
  { level: 1, name: 'skewer', actions: { top: 'discard', bottom: 'discard' }, initiative: 35 },
  { level: 1, name: 'spare dagger', actions: { top: 'discard', bottom: 'discard' }, initiative: 27 },
  { level: 1, name: 'trample', actions: { top: 'discard', bottom: 'discard' }, initiative: 72 },
  { level: 1, name: 'warding strength', actions: { top: 'discard', bottom: 'discard' }, initiative: 32 },
  { level: 'X', name: 'fearsome taunt', actions: { top: 'discard', bottom: 'discard' }, initiative: 10 },
  { level: 'X', name: 'provoking roar', actions: { top: 'discard', bottom: 'discard' }, initiative: 18 },
  { level: 'X', name: 'sweeping blow', actions: { top: 'discard', bottom: 'discard' }, initiative: 23 },
  { level: 2, name: 'intimidating growl', actions: { top: 'discard', bottom: 'discard' }, initiative: 51 },
  { level: 2, name: 'juggernaut', actions: { top: 'discard', bottom: 'discard' }, initiative: 34 },
  { level: 3, name: 'hook and chain', actions: { top: 'discard', bottom: 'discard' }, initiative: 42 },
  { level: 3, name: 'unstoppable charge', actions: { top: 'discard', bottom: 'discard' }, initiative: 86 },
  { level: 4, name: 'push through', actions: { top: 'discard', bottom: 'discard' }, initiative: 57 },
  { level: 4, name: 'whirlwind', actions: { top: 'discard', bottom: 'discard' }, initiative: 28 },
  { level: 5, name: 'defensive tactics', actions: { top: 'discard', bottom: 'discard' }, initiative: 39 },
  { level: 5, name: 'skirmishing maneuver', actions: { top: 'discard', bottom: 'discard' }, initiative: 29 },
  { level: 6, name: 'immovable phalanx', actions: { top: 'discard', bottom: 'discard' }, initiative: 17 },
  { level: 6, name: 'run through', actions: { top: 'discard', bottom: 'discard' }, initiative: 33 },
  { level: 7, name: 'leg fly', actions: { top: 'discard', bottom: 'discard' }, initiative: 19 },
  { level: 7, name: 'selfish retribution', actions: { top: 'discard', bottom: 'discard' }, initiative: 8 },
  { level: 8, name: 'crippling offensive', actions: { top: 'discard', bottom: 'discard' }, initiative: 16 },
  { level: 8, name: 'frenzied onslaught', actions: { top: 'discard', bottom: 'discard' }, initiative: 41 },
  { level: 9, name: 'brute force', actions: { top: 'discard', bottom: 'discard' }, initiative: 9 },
  { level: 9, name: 'face your end', actions: { top: 'discard', bottom: 'discard' }, initiative: 67 },
], brutePath, { imagePrefix: 'gh2-', imageAvailable: false });
