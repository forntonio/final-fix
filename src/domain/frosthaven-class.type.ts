import { type Card } from './cards.type';

export type FrosthavenClassNames =
  | 'Banner Spear'
  | 'Bladeswarm'
  | 'Blinkblade'
  | 'Boneshaper'
  | 'Brute'
  | 'Cragheart'
  | 'Deathwalker'
  | 'Deepwraith'
  | 'Drifter'
  | 'Mindthief'
  | 'Frozen Fist'
  | 'Geminate'
  | 'Crashing Tide'
  | 'Hive'
  | 'Infuser'
  | 'Metal Mosaic'
  | 'Pain Conduit'
  | 'Pyroclast'
  | 'Scoundrel'
  | 'Shattersong'
  | 'Snowdancer'
  | 'Spellweaver'
  | 'Trapper'
  | 'Tinkerer'
  | 'Red Guard'
  | 'Hatchet'
  | 'Demolitionist'
  | 'Voidwarden';

export interface FrosthavenClass<X extends Card> {
  name: FrosthavenClassNames;
  handSize: number;
  path: string;
  iconSize: { width: number; height: number };
  cards: X[];
  iconAvailable?: boolean;
}
