import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const mindthiefPath = '/gloomhaven/mindthief/abilities';

export const mindthiefCards: Card[] = createCards([
  {
    level: 'X',
    name: 'feedback loop',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 51,
  },
  {
    level: 'X',
    name: 'possession',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 82,
  },
  {
    level: 'X',
    name: 'gnawing horde',
    actions: { top: 'lose', bottom: 'lose' },
    initiative: 67,
  },
  {
    level: 1,
    name: 'submissive affliction',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 48,
  },
  {
    level: 1,
    name: 'hidden in the shadows',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 14,
  },
  {
    level: 1,
    name: 'scurry',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 20,
  },
  {
    level: 1,
    name: 'withering claw',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 18,
  },
  {
    level: 1,
    name: 'frigid apparition',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 10,
  },
  {
    level: 1,
    name: 'the minds weakness',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 75,
  },
  {
    level: 1,
    name: 'pilfer',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 79,
  },
  {
    level: 1,
    name: 'eerie barrage',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 75,
  },
  {
    level: 1,
    name: 'perverse edge',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 8,
  },
  {
    level: 1,
    name: 'empathetic assault',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 12,
  },
  {
    level: 1,
    name: 'psychic blade',
    actions: { top: 'activeDiscard', bottom: 'activeDiscard' },
    initiative: 77,
  },
  {
    level: 3,
    name: 'shivering grasp',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 18,
  },
  {
    level: 3,
    name: 'thought puppets',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 54,
  },
  {
    level: 4,
    name: 'crystalline terror',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 26,
  },
  {
    level: 4,
    name: 'mind maze',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 73,
  },
  {
    level: 5,
    name: 'deep freeze',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    initiative: 16,
  },
  {
    level: 5,
    name: 'parasitic whispers',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 64,
  },
  {
    level: 6,
    name: 'shattered psyche',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 9,
  },
  {
    level: 6,
    name: 'glacial marionette',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    initiative: 40,
  },
  {
    level: 7,
    name: 'anguished domination',
    actions: { top: 'lose', bottom: 'activeDiscard' },
    initiative: 33,
  },
  {
    level: 7,
    name: 'frostbitten march',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 70,
  },
  {
    level: 8,
    name: 'ceaseless torment',
    actions: { top: 'lose', bottom: 'lose' },
    initiative: 21,
  },
  {
    level: 8,
    name: 'mindstorm frenzy',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 62,
  },
  {
    level: 9,
    name: 'total submission',
    actions: { top: 'lose', bottom: 'activeLost' },
    initiative: 13,
  },
  {
    level: 9,
    name: 'endless chill',
    actions: { top: 'activeLost', bottom: 'lose' },
    initiative: 55,
  },
], mindthiefPath, 'gh');
