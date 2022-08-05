import '@styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
