import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { decrement, increment } from '../features/counter/counterSlice';
import { useGetPokemonByNameQuery } from '../services/pokemon';
import useTranslation from 'next-translate/useTranslation';

export function Counter() {
	const { t } = useTranslation();

	// The `state` arg is correctly typed as `RootState` already
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	// Using a query hook automatically fetches data and returns query values
	const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');

	return (
		<div>
			<div>{t('hello')}</div>
			<div>{t('variableExample', { count: 42 })}</div>
			<div>
				<button aria-label='Increment value' onClick={() => dispatch(increment())}>
					Increment
				</button>
				<span>{count}</span>
				<button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
			<div className='App'>
				{error ? (
					<>Oh no, there was an error</>
				) : isLoading ? (
					<>Loading...</>
				) : data ? (
					<>
						<h3>{data.species.name}</h3>
						<img src={data.sprites.front_shiny} alt={data.species.name} />
					</>
				) : null}
			</div>
		</div>
	);
}

export default Counter;
