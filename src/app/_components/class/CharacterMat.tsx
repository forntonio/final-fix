'use client';

import { classNameToURI, gloomhavenClassNames } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import { domAnimation, LazyMotion } from 'motion/react';
import * as m from 'motion/react-m';
import Image from 'next/image';
import { useState } from 'react';

export default function CharacterMat({
  className,
}: {
  className: FrosthavenClassNames;
}) {
  const [displayFront, setDisplayFront] = useState(true);
  const fhClassName = classNameToURI(className);
  const isGloomhaven = gloomhavenClassNames.includes(className);

  if (isGloomhaven) {
    return <div className='w-mat h-mat flex flex-col items-center justify-center gap-4 rounded border border-dashed border-slate-500 bg-slate-900/60 p-6 text-center'>
      <p className='text-lg font-semibold uppercase tracking-wide'>{className}</p>
      <p className='text-sm text-slate-200'>Add mat images at <span className='font-mono break-all'>{`public/gloomhaven/${fhClassName}/mats/gh2-${fhClassName}.webp`}</span> and a back face with <span className='font-mono break-all'>{`public/gloomhaven/${fhClassName}/mats/gh2-${fhClassName}-back.webp`}</span>.</p>
    </div>;
  }

  const matPath = `/${fhClassName}/mats/fh-${fhClassName}.webp`;
  const matBackPath = `/${fhClassName}/mats/fh-${fhClassName}-back.webp`;

  return <button
    autoFocus
    onClick={() => setDisplayFront(!displayFront)}
    className='w-mat h-mat perspective-distant transform-3d'>
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{ duration: 0.7 }}
        animate={{ rotateY: displayFront ? 0 : 180 }}
        className='absolute top-0 border-solid border-2 border-primary backface-hidden'
      >
        <Image
          src={matPath}
          alt={`${fhClassName} mat`}
          width={600}
          height={392}
        />
      </m.div>
      <m.div
        transition={{ duration: 0.7 }}
        initial={{ rotateY: 180 }}
        animate={{ rotateY: displayFront ? 180 : 360 }}
        className='absolute top-0 border-solid border-2 border-primary backface-hidden'
      >
        <Image
          src={matBackPath}
          alt={`${fhClassName} mat back`}
          width={600}
          height={392}
        />
      </m.div>
    </LazyMotion>
  </button>;
}
