import { classNameToURI, gloomhavenClassNames } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import Image from 'next/image';

export default function CharacterToken({
  className,
}: {
  className: FrosthavenClassNames;
}) {
  const fhClassName = classNameToURI(className);
  const isGloomhaven = gloomhavenClassNames.includes(className);

  if (isGloomhaven) {
    return <span
      title={`Add a token icon at public/gloomhaven/${fhClassName}/icons/gh2-${fhClassName}-character-token.webp`}
      className='absolute flex h-[20px] w-[20px] items-center justify-center rounded-full border border-dashed border-white text-[8px] font-semibold uppercase text-white/80'>
      GH
    </span>;
  }

  const tokenPath = `/${fhClassName}/icons/fh-${fhClassName}-character-token.webp`;

  return <Image
    src={tokenPath}
    alt='token'
    width={20}
    height={20}
    className='absolute'
  />;
}
