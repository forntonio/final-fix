import type { Card } from '../cards.type';
import type { FrosthavenClass, KnownClass } from '../frosthaven-class.type';
import { hiveCards } from './cards';

export function isHive(frosthavenClass: KnownClass<Card>): frosthavenClass is FrosthavenClass<Card> {
  return frosthavenClass.game === 'Frosthaven' && frosthavenClass.name === 'Hive';
}

export const hive: FrosthavenClass<Card> = {
  game: 'Frosthaven',
  name: 'Hive',
  handSize: 11,
  path: '/hive/icons/fh-hive-color-icon.svg',
  iconSize: { width: 370, height: 600 },
  cards: hiveCards,
};
