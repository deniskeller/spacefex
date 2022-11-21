import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTransition, animated } from 'react-spring';
// import { Provider } from 'react-redux';
// import { setupStore } from '@store/store';
// import 'animate.css/animate.min.css';
import '../styles/globals.scss';

// const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const transition = useTransition(router, {
    key: router.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 },
  });

  return transition((style: object) => {
    return (
      <animated.div style={style}>
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta name="keywords" content="Spacefex" />
            <meta name="author" content="Spacefex" />
            <meta name="description" content="Spacefex" />
            <title>Spacefex</title>
          </Head>

          {/* <Provider store={store}> */}
          <Component {...pageProps} />
          {/* </Provider> */}
        </>
      </animated.div>
    );
  });
}

export default MyApp;
