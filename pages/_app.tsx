import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "next/app";
import Head from "next/head";
import ReactGA from "react-ga";
import { DefaultSeo } from "next-seo";
import { createSEOConfig } from "../utils/seoMeta";

class MyApp extends App {
  async componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize("G-539MV2B1TZ");
      this.logPageView();
    }
  }

  componentDidUpdate() {
    this.logPageView();
  }

  logPageView() {
    const { router } = this.props;

    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(router.asPath);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width" />
        </Head>
        <ChakraProvider theme={theme}>
          <DefaultSeo {...createSEOConfig()} />

          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
  }
}

export default MyApp;
