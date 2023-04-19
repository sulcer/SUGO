import React, { FC } from 'react';
import { ContactForm } from '@/components';
import Head from 'next/head';
import {getContact} from "@/lib/api";

interface ContactInfoProps {
    contact: {name: string, email: string, phone: string, address: string, taxNumber: string, representative: string, registrationNumber: string}
}

const Map = () => {
  return (
    <iframe
      className={'w-full'}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2740.5070340179773!2d15.748219115664767!3d46.616744363819905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f738e7a0cbedf%3A0x7766bd6edfa8d439!2sSpodnji%20Jakobski%20Dol%2045%2C%202222%20Jakobski%20dol!5e0!3m2!1sen!2ssi!4v1680200277978!5m2!1sen!2ssi"
      width="1080"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

const ContactInfo:FC<ContactInfoProps> = ({ contact }) => {
  return (
    <div className={'flex flex-col gap-2 ml-10 my-8'}>
      <h1 className={'font-bold text-3xl text-accent-2 mb-4'}>
        Kontaktirajte nas
      </h1>
      <div className={'font-semibold'}>{contact.name}</div>
      <div>
        <b>Zastopnik:</b> {contact.representative}
      </div>
      <div>
        <b>Naslov:</b> {contact.address}
      </div>
      <div>
        <b>Telefon:</b> {contact.phone}
      </div>
      <div>
        <b>E-pošta:</b> {contact.email}
      </div>
      <div>
        <b>Davčna številka:</b> {contact.taxNumber}
      </div>
      <div>
        <b>Matična številka:</b> {contact.registrationNumber}
      </div>
    </div>
  );
};

const Contact: FC = (props: any) => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div
          className={
            'flex flex-col sm:grid sm:grid-cols-2 rounded border-2 border-accent m-4 sm:m-20'
          }
        >
          <div className={'rounded p-4'}>
            <ContactForm />
          </div>

          <div className={'flex flex-col bg-neutral-900 text-white p-4'}>
            <ContactInfo contact={props.contact.data.attributes.contact}/>
          </div>
        </div>

        <Map />
      </div>
    </>
  );
};

export default Contact;

export async function getStaticProps() {
    const contact = await getContact();

    return {
        props: {
            contact,
        },
    };
}
