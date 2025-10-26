import type { Card } from '@/domain/cards.type';
import type { FrosthavenClass } from '@/domain/frosthaven-class.type';
import Image from 'next/image';

export default function ClassIcon({
  fhClass,
}: {
  fhClass: FrosthavenClass<Card>;
}) {
  const { name, path, iconSize, iconAvailable } = fhClass;

  if (iconAvailable === false || !path) {
    return <div className='max-w-icon max-h-icon flex items-center justify-center rounded bg-slate-700 text-center p-4 text-sm uppercase tracking-wide'>
      <span className='leading-5'>{`Add ${name} icon to public${path ?? '/gloomhaven/<class>/icons/'} (SVG or PNG)`}</span>
    </div>;
  }

  return <Image
    className='max-w-icon max-h-icon'
    src={path}
    alt={name}
    {...iconSize}
  />;
}