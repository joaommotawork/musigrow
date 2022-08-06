import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { setupStore } from '@app/store';
import Layout from '@components/Layout/Layout';
import '@styles/globals.css';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={setupStore()}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default appWithTranslation(MyApp);
