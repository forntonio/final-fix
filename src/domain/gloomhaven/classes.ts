import type { Card } from '../cards.type';
import type { FrosthavenClass } from '../frosthaven-class.type';
import { brute } from './brute/class';
import { cragheart } from './cragheart/class';
import { mindthief } from './mindthief/class';
import { scoundrel } from './scoundrel/class';
import { spellweaver } from './spellweaver/class';
import { tinkerer } from './tinkerer/class';

export const gloomhavenClasses: FrosthavenClass<Card>[] = [
  brute,
  tinkerer,
  spellweaver,
  scoundrel,
  cragheart,
  mindthief,
];

export const gloomhavenClassNames = gloomhavenClasses.map(({ name }) => name);
