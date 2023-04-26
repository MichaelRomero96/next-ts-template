/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { TssCacheProvider } from 'tss-react';
import ReduxProvider from '../components/providers/ReduxProvider';
import createEmotionCache from '../theme/emotionConfig';
import '../theme/global.css';

/* TSS React SSR Cache Provider */
const cache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <TssCacheProvider value={cache}>
        <Component {...pageProps} />
      </TssCacheProvider>
    </ReduxProvider>
  );
}
