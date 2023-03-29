import React from 'react';
import { MachineImageCard } from '@/components';
import img from '@/assets/gallery/test.jpeg';

const MachineList = [
  {
    name: 'Stružnica CNC',
    info: 'stroj za obdelovanje kovin, ki se uporablja za izdelavo kovinskih delov s pomočjo vrtenja. CNC stružnica omogoča natančno obdelavo kovinskih delov, saj je programabilna in omogoča avtomatsko obdelavo.',
    src: img,
    alt: 'alt',
  },
  {
    name: 'Rezkalni stroj',
    info: 'stroj za obdelovanje kovin, ki se uporablja za odstranjevanje kovinskega materiala s površine kovinskih delov. Rezkalni stroj ima lahko več osi in lahko izvaja različne vrste obdelav, kot so ravnanje, profiliranje in izvrtanje lukenj.',
    src: img,
    alt: 'alt',
  },
];

const MachineParkGallery = () => {
  return (
    <div className={'w-full bg-accent-3 mt-8 py-20'}>
      <div className={'mx-16'}>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'
          }
        >
          {[...MachineList, ...MachineList].map(
            ({ name, info, src, alt }, index) => (
              <MachineImageCard
                key={index}
                src={src}
                alt={alt}
                name={name}
                info={info}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MachineParkGallery;
