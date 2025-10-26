'use client';

import type { Card } from '@/domain/cards.type';
import { allClasses } from '@/domain/frosthaven-class';
import type { KnownClass, KnownClassNames } from '@/domain/frosthaven-class.type';
import { useFrosthavenStore } from '@/stores/cards.store';
import { createContext, useEffect } from 'react';

export const ClassContext = createContext<KnownClass<Card>>(allClasses[0]!);

export default function ClassProvider({
  children,
  className,
}: {
  children: React.ReactNode;
  className: KnownClassNames;
}) {
  const reset = useFrosthavenStore((state) => state.reset);
  const selectedClass = allClasses
    .find(({ name }) => name === className);

  if (!selectedClass) {
    throw new Error(`Unknown class ${className}`);
  }

  useEffect(() => {
    reset();
  }, [reset, className]);

  return <ClassContext value={selectedClass}>
    {children}
  </ClassContext>;
}
