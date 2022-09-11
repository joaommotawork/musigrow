import {
	StatisticsCardTypeOneProps,
	StatisticsCardTypeOne,
} from '@library/molecules';
import { Fragment } from 'react';
import classnames from 'classnames';

export interface StatisticsTypeOneProps {
	items: StatisticsCardTypeOneProps[];
}

export const StatisticsTypeOne = ({ items }: StatisticsTypeOneProps) => {
	const sectionClasses = classnames({
		'grid gap-5 overflow-hidden justify-items-center': true,
		'grid-cols-1': items.length >= 1 && items.length < 2,
		'grid-cols-2': items.length >= 2 && items.length < 4,
		'grid-cols-2 lg:grid-cols-4': items.length >= 4,
	});

	return (
		<section className={sectionClasses}>
			{items.map((item, index) => {
				return (
					<Fragment key={`statistics-card-type-one-${index}`}>
						<StatisticsCardTypeOne {...item} />
					</Fragment>
				);
			})}
		</section>
	);
};

export default StatisticsTypeOne;
