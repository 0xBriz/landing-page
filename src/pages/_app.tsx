import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";
import Head from "next/head";
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
    </ChakraProvider>
  );
}

export default MyApp;
