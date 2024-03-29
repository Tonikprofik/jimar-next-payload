import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from '@emotion/server/create-instance';   
import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';


export default class MyDocument extends Document {
    
    render() {
            return (
              <Html lang="en">
                <Head>
                  <meta
                    name="theme-color"
                    content={theme.palette.primary.main}
                  />
                  <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  />
                  <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  />
                </Head>
                <body>
                  <Main />
                  <NextScript />
                </body>
              </Html>
            );
        }
    }

    MyDocument.getInitialProps = async (ctx) => {
        const originalRenderPage = ctx.renderPage;

        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () => 
        originalRenderPage({
            enhanceApp: (App) => (props) =>
             <App emotioncache={cache} {...props} />,
        });

        const initialProps = await Document.getInitialProps(ctx);
        // important. It prevents emotion to render invalid HTML.
        // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <styles data-emotion={`${style.key} ${style.ids.join(' ')}`}
                    key={style.key}
                    dangerouslySetInnerHTML={{ __html: style.css }} 
            />
        ));

        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
        };
    };