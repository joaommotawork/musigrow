import type { AppProps, NextWebVitalsMetric } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { GoogleAnalytics, usePageViews, event } from 'nextjs-google-analytics';
import { SessionProvider } from 'next-auth/react';
import { setupStore } from '@app/store';
import Layout from '@components/Layout/Layout';
import '@vime/core/themes/default.css';
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

export function reportWebVitals({
	id,
	name,
	label,
	value,
}: NextWebVitalsMetric) {
	event(name, {
		category:
			label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
		label: id, // id unique to current page load
		nonInteraction: true, // avoids affecting bounce rate.
	});
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	usePageViews();

	return (
		<>
			<Head>
				<title>Orquestra ISTEC</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover'
				/>
			</Head>
			<GoogleAnalytics />
			<SessionProvider session={session}>
				<Provider store={setupStore()}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</SessionProvider>
		</>
	);
}

export default appWithTranslation(MyApp);
