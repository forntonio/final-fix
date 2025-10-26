import type { Card } from '../../cards.type';

export const mindthiefCards: Card[] = [];
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