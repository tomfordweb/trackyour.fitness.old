import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../component/layout";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NX2ZCZR",
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <SessionProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  );
}

export default MyApp;
