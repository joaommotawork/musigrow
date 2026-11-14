import {
	StatisticsCardTypeOne,
	StatisticsCardTypeOneProps,
} from "@library/molecules";
import classnames from "classnames";
import { Fragment } from "react";

export interface StatisticsTypeOneProps {
	items: Array<StatisticsCardTypeOneProps>;
}

export const StatisticsTypeOne = ({ items }: StatisticsTypeOneProps) => {
	const sectionClasses = classnames({
		"grid gap-5 overflow-hidden justify-items-center": true,
		"grid-cols-1": items.length >= 1 && items.length < 2,
		"grid-cols-2": items.length >= 2 && items.length < 4,
		"grid-cols-2 lg:grid-cols-4": items.length >= 4,
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
