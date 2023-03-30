import React, { FC } from 'react';
import Input from '@/components/ContactForm/Input';

export const ContactForm: FC = () => {
  return (
    <form className={'flex flex-col gap-4'}>
      <Input label={'E-pošta'} />
      <Input label={'Zadeva'} />
      <div className={'flex flex-col w-full'}>
        <label className={'font-semibold'}>Sporočilo</label>
        <textarea
          cols={20}
          rows={15}
          className={'bg-accent-4 shadow rounded p-2'}
        />
      </div>
      <button className={'bg-accent text-white py-2 rounded'}>Pošlji</button>
    </form>
  );
};
