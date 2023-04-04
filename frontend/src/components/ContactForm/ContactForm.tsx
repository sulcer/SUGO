import React, { FC, FormEvent, useState } from 'react';
import Input from '@/components/ContactForm/Input';

export const ContactForm: FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: email,
        subject,
        text,
      }),
    });
    setText('');
    setEmail('');
    setSubject('');
  };

  return (
    <form className={'flex flex-col w-full gap-6'} onSubmit={handleSubmit}>
      <Input
        placeholder={'E-pošta'}
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Input
        placeholder={'Zadeva'}
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />
      <div className={'flex flex-col w-full'}>
        <textarea
          placeholder={'Sporočilo'}
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          cols={10}
          rows={10}
          className={
            'bg-accent-4 shadow rounded p-2 border-[1px]  border-neutral-400'
          }
        />
      </div>
      <button
        className={'bg-accent text-white py-2 px-8 rounded w-fit'}
        type="submit"
      >
        Pošlji
      </button>
    </form>
  );
};
