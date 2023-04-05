import '@/styles/globals.css';
import { LayoutProvider } from '@/components';
import {AppProps} from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
