import Heading from '@/app/_components/layout/Heading';
import { frosthavenClasses, gloomhavenClasses } from '@/domain/frosthaven-class';
import type { FrosthavenClassNames } from '@/domain/frosthaven-class.type';
import Image from 'next/image';
import SelectClass from './SelectClass';

const jotlClassNames: FrosthavenClassNames[] = [
  'Red Guard',
  'Hatchet',
  'Demolitionist',
  'Voidwarden',
];

export default function SelectClassPage() {
  const jotlClasses = frosthavenClasses.filter(({ name }) => jotlClassNames.includes(name));
  const fhClasses = frosthavenClasses.filter(({ name }) => !jotlClassNames.includes(name));

  return <div className='flex flex-col gap-16 p-16 place-items-center'>
    <header>
      <Image priority loading='eager' src='/fh-frosthaven-logo.webp' alt='Frosthaven logo' width={600} height={87} />
    </header>
    <Heading title='Select your class' />
    <section className='flex w-full max-w-6xl flex-col gap-6'>
      <h2 className='text-2xl font-semibold uppercase tracking-wide text-center'>Frosthaven</h2>
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-8 p-6 place-items-center bg-linear-to-b from-black to-blue-500 rounded-lg'>
        {fhClasses.map((fhClass) => <SelectClass key={fhClass.name} fhClass={fhClass} />)}
      </div>
    </section>
    <section className='flex w-full max-w-6xl flex-col items-center gap-6'>
      <Image src='/jotl-logo.webp' alt='Jaws of the Lion logo' width={600} height={150} />
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-8 p-6 place-items-center bg-linear-to-b from-black to-orange-500 rounded-lg'>
        {jotlClasses.map((fhClass) => <SelectClass key={fhClass.name} fhClass={fhClass} />)}
      </div>
    </section>
    <section className='flex w-full max-w-6xl flex-col gap-6'>
      <h2 className='text-2xl font-semibold uppercase tracking-wide text-center'>Gloomhaven (Second Edition)</h2>
      <p className='text-center text-sm text-slate-200'>Icons and card art use placeholders—add assets under <code className='font-mono'>public/gloomhaven/&lt;class&gt;</code> to replace them.</p>
      <div className='grid grid-cols-3 lg:grid-cols-6 gap-8 p-6 place-items-center bg-linear-to-b from-black to-gray-700 rounded-lg'>
        {gloomhavenClasses.map((ghClass) => <SelectClass key={ghClass.name} fhClass={ghClass} />)}
      </div>
    </section>
  </div>;
}
