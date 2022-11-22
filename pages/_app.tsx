import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts/layout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <Head>
        <link rel='shortcut icon' href='logo-final.svg' />
        <title>
          {currentRoute === '/'
            ? 'Home | UltiBets'
            : `${currentRoute.slice(1)} | Utibets`}
        </title>
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer position='top-center' />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
