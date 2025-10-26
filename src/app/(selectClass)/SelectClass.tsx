import type { Card } from '@/domain/cards.type';
import type { KnownClass } from '@/domain/frosthaven-class.type';
import Link from 'next/link';
import ClassIcon from '../_components/class/ClassIcon';
import { classNameToURI } from '@/domain/frosthaven-class';

export default function SelectClass({
  gameClass,
}: {
  gameClass: KnownClass<Card>;
}) {
  const { name } = gameClass;

  return <Link
    href={`/${classNameToURI(name)}/select`}>
    <ClassIcon characterClass={gameClass} />
  </Link>;
}