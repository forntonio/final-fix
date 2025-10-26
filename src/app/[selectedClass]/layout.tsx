import ClassProvider from '@/context/ClassContext';
import { allClasses, classNameToURI, classURIToName } from '@/domain/frosthaven-class';
import type { KnownClassNames } from '@/domain/frosthaven-class.type';
import type { Metadata, ResolvingMetadata } from 'next';
import DisplayClassMat from './DisplayClassMat';

export const dynamicParams = false;

type Params = Promise<{
  selectedClass: KnownClassNames;
}>;

export function generateStaticParams() {
  return allClasses.map(({ name }) => ({
    selectedClass: classNameToURI(name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);
  const classDetails = allClasses.find(({ name }) => name === fhClassName);
  const gameName = classDetails?.game ?? 'Frosthaven';
  const keywords = (await parent).keywords ?? [];

  return {
    title: `${fhClassName} - ${gameName} Cards`,
    description: `Manage your ${gameName} ${fhClassName} cards`,
    keywords: [...keywords, fhClassName, gameName],
  }
}

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[selectedClass]'>) {
  const { selectedClass } = await params;
  const fhClassName = classURIToName(selectedClass);

  return <div data-theme={selectedClass}>
    <ClassProvider className={fhClassName}>
      {children}
      <div className='absolute left-0 top-0 p-4 flex flex-col items-end gap-2'>
        <DisplayClassMat />
      </div>
    </ClassProvider>
  </div>;
}
