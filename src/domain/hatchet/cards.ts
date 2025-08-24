import { createCards } from '../card.factory';
import type { Card } from '../cards.type';

const hatchetPath = '/hatchet/abilities';

export const hatchetCards: Card[] = createCards([
  { level: 1, name: 'Center Mass', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Close Cuts', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Disorienting Barrage', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Double Throw', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Follow Through', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Power Pitch', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Retrieval', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Second Wind', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Stopping Power', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'The Favorite', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Care Package', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Extra Lift', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Heart Seeker', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Brutalize', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Repeat Shot', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Fearsome Efficiency', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Overwatch', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Ripped From the Flesh', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Quick Turnaround', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Fancy Hat', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Camaraderie', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Ricochet', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'The New Favorite', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
], hatchetPath);
