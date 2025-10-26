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
  const ghClasses = gloomhavenClasses;

  return <div className='flex flex-col gap-16 p-16 place-items-center'>
    <header>
      <Image priority loading='eager' src='/fh-frosthaven-logo.webp' alt='Frosthaven logo' width={600} height={87} />
    </header>
    <Heading title='Select your class' />
    <div className='grid grid-cols-3 lg:grid-cols-6 gap-8 p-6 place-items-center bg-linear-to-b from-black to-blue-500 rounded-lg'>
      {fhClasses.map((fhClass) => <SelectClass key={fhClass.name} gameClass={fhClass} />)}
      <div className='col-span-3 lg:col-span-6'>
        <Image src='/jotl-logo.webp' alt='Jaws of the Lion logo' width={600} height={150} />
      </div>
      {jotlClasses.map((fhClass) => <SelectClass key={fhClass.name} gameClass={fhClass} />)}
      <div className='col-span-3 lg:col-span-6 text-center text-lg font-semibold text-white uppercase tracking-wide'>
        Gloomhaven (Second Edition)
      </div>
      {ghClasses.map((ghClass) => <SelectClass key={ghClass.name} gameClass={ghClass} />)}
    </div>
  </div>;
}
