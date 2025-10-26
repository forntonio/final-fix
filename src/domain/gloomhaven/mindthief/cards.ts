import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const mindthiefPath = '/gloomhaven/mindthief/abilities';

export const mindthiefCards: Card[] = createCards([
  {
    level: 'X',
    name: 'mind spike',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 8,
  },
  {
    level: 'X',
    name: 'cloak of night',
    actions: { top: 'activeDiscard', bottom: 'activeLost' },
    initiative: 29,
  },
  {
    level: 'X',
    name: 'psychic contagion',
    actions: { top: 'lose', bottom: 'lose' },
    initiative: 67,
  },
  {
    level: 1,
    name: 'psychic assault',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 14,
  },
  {
    level: 1,
    name: 'frozen spikes',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 28,
  },
  {
    level: 1,
    name: 'scurry and stab',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 23,
  },
  {
    level: 1,
    name: 'mindful defense',
    actions: { top: 'activeDiscard', bottom: 'discard' },
    initiative: 38,
  },
  {
    level: 1,
    name: 'subconscious strike',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 11,
  },
  {
    level: 1,
    name: 'frigid movement',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 32,
  },
  {
    level: 1,
    name: 'clattering thoughts',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 61,
  },
  {
    level: 1,
    name: 'eerie barrage',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 75,
  },
  {
    level: 1,
    name: 'swarm command',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 48,
  },
  {
    level: 2,
    name: 'ice-laden blades',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 17,
  },
  {
    level: 2,
    name: 'maniacal command',
    actions: { top: 'activeLost', bottom: 'activeDiscard' },
    initiative: 45,
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
