import '@styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { setupStore } from '@app/store';
import { Provider } from 'react-redux';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={setupStore()}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
