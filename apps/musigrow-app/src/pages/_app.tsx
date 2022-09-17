import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import { setupStore } from '@app/store';
import Layout from '@components/Layout/Layout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import '@styles/globals.css';
import Head from 'next/head';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	usePageViews();

	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover'
				/>
			</Head>
			<GoogleAnalytics />
			<Provider store={setupStore()}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}

export default appWithTranslation(MyApp);
