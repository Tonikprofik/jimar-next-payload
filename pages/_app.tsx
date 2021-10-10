import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
// import create theme from '../styles/theme';

// import '../css/style.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (



  <Component {...pageProps} />
);

export default MyApp;
