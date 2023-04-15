import React, { FC, FormEvent, useEffect, useState } from 'react';
import Input from '@/components/ContactForm/Input';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const ContactForm: FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [verified, setVerified] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha();
    setVerified(!!token);
  };

  useEffect(() => {
    handleReCaptchaVerify();
    return () => {
      setVerified(false);
    };
  }, [executeRecaptcha, handleReCaptchaVerify]);

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
        label={'E-pošta'}
        required
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Input
        label={'Zadeva'}
        required
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />
      <div className={'flex flex-col relative z-0 w-full'}>
        <textarea
          placeholder={' '}
          required
          value={text}
          onChange={(e) => setText(e.currentTarget.value)}
          cols={10}
          rows={10}
          className={
            'pl-2 pb-1 pt-2 border-2 border-accent bg-transparent rounded outline-none'
          }
        />
        <label
          className={
            'absolute top-1.5 ml-2 -z-1 bg-transparent duration-300 origin-0 text-black'
          }
        >
          Sporočilo
        </label>
      </div>
      <button
        disabled={!verified}
        className={
          'bg-accent text-white py-2 px-8 rounded w-full sm:w-fit disabled:opacity-90 disabled:cursor-not-allowed'
        }
        type="submit"
      >
        Pošlji
      </button>
    </form>
  );
};
