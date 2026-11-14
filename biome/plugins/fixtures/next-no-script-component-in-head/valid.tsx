import Head from "next/head";
import Script from "next/script";
export const Page = () => (
  <>
    <Head>
      <title>Page</title>
    </Head>
    <Script src="/analytics.js" />
  </>
);
