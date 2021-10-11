import React from 'react';
import App, { AppProps } from 'next/app';
import Router, {useRouter} from 'next/router';


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

const MyApp = (appProps: MyAppProps): React.ReactElement => {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = appProps;
  const router = useRouter();

  return  (
  <CacheProvider value={emotionCache}>
    <Head>

    </Head>
    <ThemeProvider theme={theme}>
    <CssBaseline/>

    <Component {...pageProps} />
  
    </ThemeProvider>
  </CacheProvider>
  )

};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const [megaMenu] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/mega-menu`).then((res) => res.json())
  ]);

  return {
    ...appProps,
    megaMenu
  };
};


export default MyApp;
