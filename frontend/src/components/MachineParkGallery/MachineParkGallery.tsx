import React, {FC} from 'react';
import { MachineImageCard } from '@/components';

interface MachineParkGalleryProps {
    machinePark: any;
}

const MachineParkGallery:FC<MachineParkGalleryProps> = ({ machinePark }) => {
  return (
    <div className={'w-full bg-accent-3 mt-8 py-20'}>
      <div className={'mx-5 sm:mx-20'}>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'
          }
        >
            {machinePark.map((machine: any) => (
                <MachineImageCard src={machine.attributes.machine.data.attributes.url} name={machine.attributes.name} info={machine.attributes.description} alt={machine.attributes.machine.data.attributes.name} height={machine.attributes.machine.data.attributes.height} width={machine.attributes.machine.data.attributes.width} key={machine.id}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MachineParkGallery;
