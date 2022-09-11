import { ReactNode } from 'react';
import { TextTag } from '@library/atoms';

export interface Category {
	name: string;
	accentColorBackground?: string;
	accentColorText?: string;
}

export interface TeamCardTypeOneProps {
	image?: ReactNode;
	children: string;
	categories?: Category[];
	description?: string;
	contacts?: ReactNode;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const TeamCardTypeOne = ({
	image,
	children,
	categories,
	description,
	contacts,
	accentColorBackground = 'bg-red-50',
	accentColorText = 'text-red-500',
}: TeamCardTypeOneProps) => {
	const renderCategories = (categories: Category[]) => {
		return (
			<div className='flex flex-wrap gap-2'>
				{categories.map((category) => (
					<TextTag
						accentColorBackground={
							category.accentColorBackground
								? category.accentColorBackground
								: accentColorBackground
						}
						accentColorText={
							category.accentColorText
								? category.accentColorText
								: accentColorText
						}>
						{category.name}
					</TextTag>
				))}
			</div>
		);
	};

	return (
		<div className='w-full min-w-fit'>
			<div className='flex h-full items-center rounded-lg border border-gray-200 p-4'>
				{image}
				<div className='flex flex-col gap-2'>
					{categories && renderCategories(categories)}
					{description && <p className='text-black'>{description}</p>}
					<h2 className='title-font font-medium text-black'>
						{children}
					</h2>
					{contacts && (
						<div className='flex flex-wrap gap-2'>{contacts}</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TeamCardTypeOne;
