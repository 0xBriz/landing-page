import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Fonts } from "../components/Fonts";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Aequinox</title>
      </Head>
      <Fonts />
      <Component {...pageProps} />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YVR16GE4Y6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YVR16GE4Y6');
        `}
      </Script>
    </ChakraProvider>
  );
}

export default MyApp;
