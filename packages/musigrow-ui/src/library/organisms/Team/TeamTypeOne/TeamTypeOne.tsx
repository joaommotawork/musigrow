import { TeamCardTypeOneProps, TeamCardTypeOne } from '@library/molecules';
import { Fragment } from 'react';

export interface TeamTypeOneProps {
	items: TeamCardTypeOneProps[];
}

export const TeamTypeOne = ({ items }: TeamTypeOneProps) => {
	return (
		<section className='grid w-full grid-cols-1 justify-items-center gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3'>
			{items.map((item, index) => {
				return (
					<Fragment key={`blog-card-type-one-${index}`}>
						<TeamCardTypeOne {...item} />
					</Fragment>
				);
			})}
		</section>
	);
};

export default TeamTypeOne;
