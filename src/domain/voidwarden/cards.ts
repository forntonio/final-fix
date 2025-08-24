import { createCards } from '../card.factory';
import type { Card } from '../cards.type';

const voidwardenPath = '/voidwarden/abilities';

export const voidwardenCards: Card[] = createCards([
  { level: 1, name: 'Black Boon', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Gift of the Void', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Lure of the Void', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Suggestion', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Turn Out the Lights', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Wicked Scratch', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Grasp of Doom', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Resigned Frenzy', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Freeze the Soul', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Putrid Cloud', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Master Influence', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Hostile Takeover', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Close to the Abyss', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Empowered Link', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Signs of the Void', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
  { level: 1, name: 'Eyes of the Abyss', actions: { top: 'discard', bottom: 'discard' }, initiative: 50 },
], voidwardenPath);
