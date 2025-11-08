import { createCards } from '../../card.factory';
import type { Card } from '../../cards.type';

const cragheartPath = '/gloomhaven/cragheart/abilities';

export const cragheartCards: Card[] = createCards([
  {
    level: 'X',
    name: 'petrify',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 53,
  },
  {
    level: 'X',
    name: 'heaving swing',
    actions: { top: 'discard', bottom: 'activeDiscard' },
    initiative: 57,
  },
  {
    level: 'X',
    name: 'burrow',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 94,
  },
  {
    level: 1,
    name: 'earthen bulwark',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 41,
  },
  {
    level: 1,
    name: 'rumbling advance',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 38,
  },
  {
    level: 1,
    name: 'unstable upheaval',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 13,
  },
  {
    level: 1,
    name: 'earthen clod',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 38,
  },
  {
    level: 1,
    name: 'massive boulder',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 87,
  },
  {
    level: 1,
    name: 'opposing strike',
    actions: { top: 'discard', bottom: 'activeLost' },
    initiative: 46,
  },
  {
    level: 1,
    name: 'crater',
    actions: { top: 'discard', bottom: 'lose' },
    initiative: 61,
  },
  {
    level: 1,
    name: 'crushing grasp',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 35,
  },
  {
    level: 1,
    name: 'dirt tornado',
    actions: { top: 'discard', bottom: 'discard' },
    initiative: 82,
  },
  {
    level: 1,
    name: 'avalanche',
    actions: { top: 'lose', bottom: 'discard' },
    initiative: 75,
  },
  {
    level: 1,
    name: 'backup ammunition',
    actions: { top: 'activeLost', bottom: 'discard' },
    initiative: 77,
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
], cragheartPath, 'gh');
