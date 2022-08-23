import { ReactNode } from 'react';
import { TextTag } from '@library/atoms';

export interface TeamCardTypeOneProps {
	image?: ReactNode;
	children: string;
	category?: string;
	description?: string;
	contacts?: ReactNode;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const TeamCardTypeOne = ({
	image,
	children,
	category,
	description,
	contacts,
	accentColorBackground = 'bg-red-50',
	accentColorText = 'text-red-500',
}: TeamCardTypeOneProps) => {
	return (
		<div className='w-full min-w-fit p-2'>
			<div className='flex h-full items-center rounded-lg border border-gray-200 p-4'>
				{image}
				<div className='flex flex-col gap-2'>
					{category && (
						<TextTag
							accentColorBackground={accentColorBackground}
							accentColorText={accentColorText}>
							{category}
						</TextTag>
					)}
					<h2 className='title-font font-medium text-black'>
						{children}
					</h2>
					{description && <p className='text-black'>{description}</p>}
					{contacts && (
						<div className='flex flex-wrap gap-2'>{contacts}</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TeamCardTypeOne;
