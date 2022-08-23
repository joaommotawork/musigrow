import {
	StatisticsCardTypeOneProps,
	StatisticsCardTypeOne,
} from '@library/molecules';
import { Fragment } from 'react';

export interface StatisticsTypeOneProps {
	items: StatisticsCardTypeOneProps[];
}

export const StatisticsTypeOne = ({ items }: StatisticsTypeOneProps) => {
	return (
		<section className='grid grid-cols-2 justify-items-center gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-4'>
			{items.map((item, index) => {
				return (
					<Fragment key={`blog-card-type-one-${index}`}>
						<StatisticsCardTypeOne {...item} />
					</Fragment>
				);
			})}
		</section>
	);
};

export default StatisticsTypeOne;
