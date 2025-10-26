'use client';

import { use, useState } from 'react';
import Modal from '../_components/layout/Modal';
import CharacterMat from '../_components/class/CharacterMat';
import { ClassContext } from '@/context/ClassContext';

export default function DisplayClassMat() {
  const [display, setDisplay] = useState(false);
  const selectedClass = use(ClassContext);

  if (selectedClass.game !== 'Frosthaven') {
    return null;
  }

  return <>
    {display && <Modal onCancel={() => setDisplay(false)}>
      <CharacterMat className={selectedClass.name}></CharacterMat>
    </Modal>}
    <button
      aria-label='Display class mat'
      className='rounded-full border-solid border-2 border-white px-2 bg-primary'
      onClick={() => setDisplay(true)}>
      ?
    </button>
  </>;
}