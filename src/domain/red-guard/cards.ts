import { createCards } from '../card.factory';
import type { Card } from '../cards.type';

const demolitionistPath = '/demolitionist/abilities';

export const demolitionistCards: Card[] = createCards([
  // Level 1
  { level: 1, name: 'windup', actions: { top: 'activeDiscard', bottom: 'activeDiscard' }, initiative: 77 },
  { level: 1, name: 'crushing weight', actions: { top: 'discard', bottom: 'discard' }, initiative: 22 },
  { level: 1, name: 'knock out the support', actions: { top: 'activeDiscard', bottom: 'discard' }, initiative: 20 },
  { level: 1, name: 'explode', actions: { top: 'lose', bottom: 'discard' }, initiative: 28 },
  { level: 1, name: 'implode', actions: { top: 'discard', bottom: 'discard' }, initiative: 88 },
  { level: 1, name: 'piston punch', actions: { top: 'discard', bottom: 'discard' }, initiative: 42 },
  { level: 1, name: 'explosive blitz', actions: { top: 'discard', bottom: 'lose' }, initiative: 19 },
  { level: 1, name: 'the big one', actions: { top: 'lose', bottom: 'discard' }, initiative: 37 },
  { level: 1, name: 'one-two punch', actions: { top: 'discard', bottom: 'discard' }, initiative: 66 },

  // Level X
  { level: 'X', name: 'lobbed charge', actions: { top: 'discard', bottom: 'lose' }, initiative: 52 },
  { level: 'X', name: 'rubble', actions: { top: 'discard', bottom: 'discard' }, initiative: 55 },
  { level: 'X', name: 'level', actions: { top: 'discard', bottom: 'activeDiscard' }, initiative: 61 },

  // Level 2
  { level: 2, name: 'robotic enhancement', actions: { top: 'discard', bottom: 'discard' }, initiative: 33 },
  { level: 2, name: 'crash protocol', actions: { top: 'activeLost', bottom: 'discard' }, initiative: 74 },

  // Level 3
  { level: 3, name: 'fire bombs', actions: { top: 'discard', bottom: 'discard' }, initiative: 24 },
  { level: 3, name: 'nowhere to run', actions: { top: 'lose', bottom: 'discard' }, initiative: 39 },

  // Level 4
  { level: 4, name: 'extra fuel', actions: { top: 'discard', bottom: 'discard' }, initiative: 17 },
  { level: 4, name: 'remote detonation', actions: { top: 'discard', bottom: 'lose' }, initiative: 63 },

  // Level 5 (JotL only grants one card at 5)
  { level: 5, name: 'mech suit', actions: { top: 'activeLost', bottom: 'discard' }, initiative: 80 },

  // Level 6
  { level: 6, name: 'drill fist', actions: { top: 'discard', bottom: 'activeDiscard' }, initiative: 62 },
  { level: 6, name: 'dust cloud', actions: { top: 'discard', bottom: 'activeDiscard' }, initiative: 15 },

  // Level 7
  { level: 7, name: 'micro missiles', actions: { top: 'discard', bottom: 'discard' }, initiative: 16 },
  { level: 7, name: 'insult to injury', actions: { top: 'activeLost', bottom: 'activeDiscard' }, initiative: 64 },

  // Level 8
  { level: 8, name: 'gut punch', actions: { top: 'discard', bottom: 'discard' }, initiative: 26 },
  { level: 8, name: 'the bigger one', actions: { top: 'lose', bottom: 'discard' }, initiative: 31 },

  // Level 9
  { level: 9, name: 'collateral damage', actions: { top: 'lose', bottom: 'discard' }, initiative: 15 },
  { level: 9, name: 'wholesale destruction', actions: { top: 'discard', bottom: 'activeDiscard' }, initiative: 34 }
], demolitionistPath);
