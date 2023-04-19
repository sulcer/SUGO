import '@/styles/globals.css';
import { LayoutProvider } from '@/components';
import { AppProps } from 'next/app';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_SITE_KEY as string}
    >
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </GoogleReCaptchaProvider>
  );
}
