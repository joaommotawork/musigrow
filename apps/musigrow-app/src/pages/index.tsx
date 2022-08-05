import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from 'musigrow-ui';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Button label='Hello' />
			</main>

			<footer></footer>
		</div>
	);
};

export default Home;