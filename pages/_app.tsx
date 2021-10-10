import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Head from '../components/Head';
import theme from '../styles/theme';

// import '../css/style.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps): React.ReactElement => (
  <CacheProvider value={emotionCache}>
    <Head>

    </Head>
  <ThemeProvider theme={theme}>
    <CssBaseline/>

    <Component {...pageProps} />
  
  </ThemeProvider>
  </CacheProvider>

);

export default MyApp;
