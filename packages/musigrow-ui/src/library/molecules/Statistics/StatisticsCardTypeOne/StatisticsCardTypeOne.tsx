import { ReactNode } from 'react';
import CountUp from 'react-countup';

export interface StatisticsCardTypeOneProps {
	icon?: ReactNode;
	count: number;
	children: string;
	accentColorText?: string;
}

export const StatisticsCardTypeOne = ({
	icon,
	count,
	children,
	accentColorText = 'text-red-500',
}: StatisticsCardTypeOneProps) => {
	return (
		<div className='w-full p-4'>
			<div className='flex flex-col items-center justify-center gap-2 px-4 py-6'>
				{icon && <span className={`${accentColorText}`}>{icon}</span>}
				<h2 className='title-font text-3xl font-medium uppercase text-black'>
					<CountUp end={count} duration={2.5} />
				</h2>
				<p className='leading-relaxed'>{children}</p>
			</div>
		</div>
	);
};

export default StatisticsCardTypeOne;
