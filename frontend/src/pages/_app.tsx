import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutProvider } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
