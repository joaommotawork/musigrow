import { setupStore } from "@app/store";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import React from "react";
import { Provider } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "@styles/globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicLayout = dynamic(() => import("@components/Layout/Layout"), {
	ssr: false,
});

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
	Promise.all([import("react-dom"), import("@axe-core/react")]).then(
		([ReactDOM, axe]) => axe.default(React, ReactDOM, 1000),
	);
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	usePageViews();

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
				/>
			</Head>
			<GoogleAnalytics />
			<Provider store={setupStore()}>
				<DynamicLayout>
					<Component {...pageProps} />
				</DynamicLayout>
			</Provider>
		</>
	);
}

export default appWithTranslation(MyApp);
