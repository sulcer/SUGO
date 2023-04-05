import React, {FC} from 'react';
import { MachineImageCard } from '@/components';

interface MachineParkGalleryProps {
    machinePark: any;
}

const MachineParkGallery:FC<MachineParkGalleryProps> = ({ machinePark }) => {
  return (
    <div className={'w-full bg-accent-3 mt-8 py-20'}>
      <div className={'mx-16'}>
        <div
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'
          }
        >
          {Array(3).fill(0).map((_, index) => (
              <MachineImageCard src={machinePark.data[0].attributes.machine.data.attributes.url} alt={machinePark.data[0].attributes.name} name={machinePark.data[0].attributes.name} info={machinePark.data[0].attributes.description} width={500} height={50} key={index}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MachineParkGallery;
