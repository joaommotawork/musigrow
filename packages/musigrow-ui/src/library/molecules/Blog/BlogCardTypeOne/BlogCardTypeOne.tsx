import React, { ReactNode } from 'react';
import TextLink from '@library/atoms/TextLink/TextLink';
import { FaArrowRight } from 'react-icons/fa';
import { TextTag } from '@library/atoms';

export interface BlogCardTypeOneProps {
	image?: ReactNode;
	category?: string;
	title: string;
	description: string;
	callToActionText: string;
	callToActionOnClick?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const BlogCardTypeOne = ({
	image,
	category,
	title,
	description,
	callToActionText,
	callToActionOnClick,
	accentColorBackground = 'bg-red-50',
	accentColorText = 'text-red-500',
}: BlogCardTypeOneProps) => {
	return (
		<div className='overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60'>
			{image}
			<div className='flex flex-col gap-2 p-6'>
				{category && (
					<TextTag
						accentColorBackground={accentColorBackground}
						accentColorText={accentColorText}>
						{category}
					</TextTag>
				)}
				<h1 className='text-lg font-medium capitalize text-black'>
					{title}
				</h1>
				<p className='leading-relaxed line-clamp-3'>{description}</p>
				<TextLink
					textOnClick={callToActionOnClick}
					icon={<FaArrowRight />}
					accentColorText={accentColorText}>
					{callToActionText}
				</TextLink>
			</div>
		</div>
	);
};

export default BlogCardTypeOne;
