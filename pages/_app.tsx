import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { SeoHead, Layout } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoHead />

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
