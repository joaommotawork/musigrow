import {
	FeatureCardTypeOneProps,
	FeatureCardTypeOne,
} from '@library/molecules';
import { Fragment } from 'react';
import classnames from 'classnames';

export interface FeatureTypeOneProps {
	items: FeatureCardTypeOneProps[];
}

export const FeatureTypeOne = ({ items }: FeatureTypeOneProps) => {
	const sectionClasses = classnames({
		'grid w-full gap-5 overflow-hidden justify-items-center': true,
		'grid-cols-1': items.length >= 1 && items.length < 2,
		'grid-cols-1 sm:grid-cols-2': items.length >= 2 && items.length < 3,
		'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': items.length >= 3,
	});

	return (
		<section className={sectionClasses}>
			{items.map((item, index) => {
				return (
					<Fragment key={`feature-card-type-one-${index}`}>
						<FeatureCardTypeOne {...item} />
					</Fragment>
				);
			})}
		</section>
	);
};

export default FeatureTypeOne;
