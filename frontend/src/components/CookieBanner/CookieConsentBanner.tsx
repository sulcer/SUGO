import CookieConsent, { Cookies } from 'react-cookie-consent';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CookieConsentBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = Cookies.get('cookieConsent');

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: newValue,
      });
    }
    //For Testing
  }, [cookieConsent]);

  return (
    <CookieConsent
      // enableDeclineButton
      location="bottom"
      buttonText="Se strinjam"
      cookieName="cookieConsent"
      expires={150}
      onAccept={() => setCookieConsent(true)}
      onDecline={() => setCookieConsent(false)}
      enableDeclineButton
      declineButtonText="Zavrni"
      declineButtonClasses="text-xs font-bold no-underline hover:text-accent-1 hover:underline"
      buttonClasses="text-xs font-bold underline hover:text-accent-1 hover:no-underline"
      buttonStyle={{
        background: '#f5f5f5',
        color: 'black',
        fontSize: '13px',
        borderRadius: '3px',
      }}
      declineButtonStyle={{
        background: '#222222',
        color: 'white',
        fontSize: '13px',
      }}
      style={{ background: '#222222' }}
    >
      <div className={'flex flex-col justify-center text-white gap-2'}>
        <p className={'text-lg font-bold'}>Spletna stran uporablja piškotke</p>
        <span className={'text-xs'}>
          Naša spletna stran uporablja piškotke. Z nadaljevanjem ogleda spletne
          strani se strinjate z uporabo piškotkov.{' '}
          <Link
            href="/varovanje-osebnih-podatkov"
            className="
            text-xs
            font-bold
            underline
            hover:text-accent-1
            hover:no-underline
          "
          >
            Več informacij!
          </Link>
        </span>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
