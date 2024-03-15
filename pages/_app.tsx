import type { AppProps } from 'next/app';
import { GlobalStyles } from '../src/commons/globalstyles/GlobalStyles';
import Head from 'next/head';
import Layout from '../src/layout/index';
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Chosungram</title>
        <meta name="description" content="Chosungram" />
        <meta charSet="UTF - 8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
