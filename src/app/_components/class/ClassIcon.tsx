import type { Card } from '@/domain/cards.type';
import type { KnownClass } from '@/domain/frosthaven-class.type';
import Image from 'next/image';

export default function ClassIcon({
  characterClass,
}: {
  characterClass: KnownClass<Card>;
}) {
  const { name, path, iconSize } = characterClass;

  if (!path || !iconSize) {
    return <span
      role='img'
      aria-label={`${name} icon placeholder`}
      className='max-w-icon max-h-icon w-full h-full flex items-center justify-center rounded-full border-2 border-dashed border-white px-4 py-6 text-center text-sm uppercase tracking-wide text-white/80 bg-white/10 backdrop-blur'>
      {name}
    </span>;
  }

  return <Image
    className='max-w-icon max-h-icon'
    src={path}
    alt={name}
    {...iconSize}
  />;
}