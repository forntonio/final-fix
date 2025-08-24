import { createCards } from '../card.factory';
import type { Card } from '../cards.type';

const demolitionistPath = '/demolitionist/abilities';

export const demolitionistCards: Card[] = createCards([
  { level: 1, name: 'Explosive Blitz', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Implode', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Knock Out the Support', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'One Two Punch', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Piston Punch', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'The Big One', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Collateral Damage', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Crash Protocol', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Crushing Weight', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Drill Fist', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Dust Cloud', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Explode', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Extra Fuel', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Fire Bombs', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Gut Punch', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Insult to Injury', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Rubble Clear', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
], demolitionistPath);
