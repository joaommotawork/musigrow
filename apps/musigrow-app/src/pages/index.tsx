import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button } from 'musigrow-ui';
import { useAppSelector, useAppDispatch } from '@app/hooks';
import { decrement, increment } from '@features/counter/counterSlice';
import { openMenu } from '@features/reactBurgerMenu/reactBurgerMenuSlice';
import { useGetPokemonByNameQuery } from '@services/pokemon';

const Home: NextPage = (locale) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();
	const count = useAppSelector((state) => state.counter.value);

	// Using a query hook automatically fetches data and returns query values
	const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

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
				<div>
					<div>
						<button
							aria-label='Increment value'
							onClick={() => dispatch(increment())}>
							Increment
						</button>
						<span>{count}</span>
						<button
							aria-label='Decrement value'
							onClick={() => dispatch(decrement())}>
							Decrement
						</button>
					</div>
				</div>
				<div className='App'>
					{error ? (
						<>Oh no, there was an error</>
					) : isLoading ? (
						<>Loading...</>
					) : data ? (
						<>
							<h3>{data.species.name}</h3>
							<img
								src={data.sprites.front_shiny}
								alt={data.species.name}
							/>
						</>
					) : null}
				</div>
				<p>{t('hello')}</p>
				<button
					aria-label='Open Menu'
					onClick={() => dispatch(openMenu())}>
					Open Menu
				</button>
			</main>

			<footer></footer>
		</div>
	);
};

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			// Will be passed to the page component as props
		},
	};
}

export default Home;
