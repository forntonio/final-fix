import { type Card } from './cards.type';

export type GameName = 'Frosthaven' | 'Gloomhaven';

export type FrosthavenClassNames =
  | 'Banner Spear'
  | 'Bladeswarm'
  | 'Blinkblade'
  | 'Boneshaper'
  | 'Deathwalker'
  | 'Deepwraith'
  | 'Drifter'
  | 'Frozen Fist'
  | 'Geminate'
  | 'Crashing Tide'
  | 'Hive'
  | 'Infuser'
  | 'Metal Mosaic'
  | 'Pain Conduit'
  | 'Pyroclast'
  | 'Shattersong'
  | 'Snowdancer'
  | 'Trapper'
  | 'Red Guard'
  | 'Hatchet'
  | 'Demolitionist'
  | 'Voidwarden';

export type GloomhavenClassNames =
  | 'Brute'
  | 'Tinkerer'
  | 'Spellweaver'
  | 'Scoundrel'
  | 'Cragheart'
  | 'Mindthief';

export type KnownClassNames = FrosthavenClassNames | GloomhavenClassNames;

export interface CharacterClass<X extends Card, N extends KnownClassNames = KnownClassNames> {
  game: GameName;
  name: N;
  handSize: number;
  path?: string;
  iconSize?: { width: number; height: number };
  cards: X[];
}

export interface FrosthavenClass<X extends Card> extends CharacterClass<X, FrosthavenClassNames> {
  game: 'Frosthaven';
  path: string;
  iconSize: { width: number; height: number };
}

export interface GloomhavenClass<X extends Card> extends CharacterClass<X, GloomhavenClassNames> {
  game: 'Gloomhaven';
}

export type KnownClass<X extends Card> = FrosthavenClass<X> | GloomhavenClass<X>;
