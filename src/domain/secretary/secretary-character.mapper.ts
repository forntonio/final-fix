import { type FrosthavenClassNames } from '../frosthaven-class.type';

export function mapCharacterNameToSecretary(name: FrosthavenClassNames) {
  const map: Record<FrosthavenClassNames, string> = {
    'Banner Spear': 'banner-spear',
    'Bladeswarm': 'envx',
    'Blinkblade': 'blinkblade',
    'Boneshaper': 'boneshaper',
    'Crashing Tide': 'coral',
    'Deathwalker': 'deathwalker',
    'Deepwraith': 'kelp',
    'Drifter': 'drifter',
    'Frozen Fist': 'fist',
    'Geminate': 'geminate',
    'Hive': 'prism',
    'Infuser': 'astral',
    'Metal Mosaic': 'drill',
    'Pain Conduit': 'shackles',
    'Pyroclast': 'meteor',
    'Shattersong': 'shards',
    'Snowdancer': 'snowflake',
    'Trapper': 'trap',
    'Red Guard': 'red-guard',
    'Hatchet': 'hatchet',
    'Demolitionist': 'demolitionist',
    'Voidwarden': 'voidwarden',
  };

  return map[name];
}
