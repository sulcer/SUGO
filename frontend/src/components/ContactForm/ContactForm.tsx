import React, { FC } from 'react';
import Input from '@/components/ContactForm/Input';

export const ContactForm: FC = () => {
  return (
    <form className={'flex flex-col w-full gap-6'}>
      <Input placeholder={'E-pošta'} />
      <Input placeholder={'Zadeva'} />
      <div className={'flex flex-col w-full'}>
        <textarea
          placeholder={'Sporočilo'}
          cols={10}
          rows={10}
          className={
            'bg-accent-4 shadow rounded p-2 border-[1px]  border-neutral-400'
          }
        />
      </div>
      <button className={'bg-accent text-white py-2 px-8 rounded w-fit'}>
        Pošlji
      </button>
    </form>
  );
};
