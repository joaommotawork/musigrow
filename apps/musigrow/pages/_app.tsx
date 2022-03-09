import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { store } from '../app/store';
import { Provider } from 'react-redux';

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<>
				<Head>
					<title>Welcome to musigrow!</title>
				</Head>
				<main className='app'>
					<Component {...pageProps} />
				</main>
			</>
		</Provider>
	);
}

export default CustomApp;
