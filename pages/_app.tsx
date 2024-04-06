import type { AppProps } from 'next/app';
import { GlobalStyles } from '../src/commons/globalstyles/GlobalStyles';
import Head from 'next/head';
import Layout from '../src/layout/index';
import React, { useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { CookiesProvider } from 'react-cookie';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // useEffect(() => {
  //   // 웹소켓 서버 URL
  //   const socket: Socket = io('YOUR_WEBSOCKET_SERVER_URL', {
  //     //@ts-ignore
  //     query: { userId }
  //   });

  //   // 메시지 수신 이벤트 리스너
  //   socket.on('message', (message: { text: string }) => {
  //     // 여기에서 메시지에 대한 알림 처리를 구현
  //     console.log(message);
  //     alert(`New message: ${message.text}`);
  //   });

  //   // 컴포넌트 언마운트 시 소켓 연결 해제
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

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
      <CookiesProvider>
        <RecoilRoot>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </CookiesProvider>
    </>
  );
}
