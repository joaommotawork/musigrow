import type { AppProps, NextWebVitalsMetric } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { GoogleAnalytics, usePageViews, event } from 'nextjs-google-analytics';
import { setupStore } from '@app/store';
import Layout from '@components/Layout/Layout';
import '@vime/core/themes/default.css';
import '@styles/globals.css';

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

function MyApp({ Component, pageProps }: AppProps) {
	usePageViews();

	return (
		<>
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
