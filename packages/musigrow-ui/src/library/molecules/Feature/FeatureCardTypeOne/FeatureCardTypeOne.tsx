import { ReactNode } from 'react';
import { TextLink } from '@library/atoms';
import { FaArrowRight } from 'react-icons/fa';

export interface FeatureCardTypeOneProps {
	title: string;
	author?: string;
	description?: string;
	icon?: ReactNode;
	callToActionText: string;
	callToActionOnClick?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const FeatureCardTypeOne = ({
	title,
	author,
	description,
	icon,
	callToActionText,
	callToActionOnClick,
	accentColorBackground = 'bg-red-50',
	accentColorText = 'text-red-500',
}: FeatureCardTypeOneProps) => {
	return (
		<div className='w-full min-w-fit'>
			<div className='flex h-full items-center rounded-lg border border-gray-200 p-4'>
				{icon && (
					<div
						className={`inline-flex h-16 w-16 flex-shrink-0 items-center justify-center ${accentColorText} ${accentColorBackground} mr-8 rounded-full`}>
						{icon}
					</div>
				)}
				<div className='flex flex-grow flex-col gap-1'>
					<h2 className='title-font text-lg font-medium text-gray-900'>
						{title}
					</h2>
					{author && (
						<h2 className='title-font text-lg font-black text-gray-900'>
							{author}
						</h2>
					)}
					{description && (
						<p className='text-base leading-relaxed'>
							{description}
						</p>
					)}
					<TextLink
						textOnClick={callToActionOnClick}
						icon={<FaArrowRight />}
						accentColorText={accentColorText}>
						{callToActionText}
					</TextLink>
				</div>
			</div>
		</div>
	);
};

export default FeatureCardTypeOne;
