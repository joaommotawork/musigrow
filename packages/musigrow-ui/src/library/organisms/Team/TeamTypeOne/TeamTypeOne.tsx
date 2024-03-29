import { TeamCardTypeOneProps, TeamCardTypeOne } from '@library/molecules';
import { Fragment } from 'react';
import classnames from 'classnames';

export interface TeamTypeOneProps {
	items: TeamCardTypeOneProps[];
}

export const TeamTypeOne = ({ items }: TeamTypeOneProps) => {
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
					<Fragment key={`team-card-type-one-${index}`}>
						<TeamCardTypeOne {...item} />
					</Fragment>
				);
			})}
		</section>
	);
};

export default TeamTypeOne;
