import React, { ReactNode } from 'react';

export interface TextLinkProps {
	children: string;
	textOnClick?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	icon?: ReactNode;
	accentColorText?: string;
}

export const TextLink = ({
	children,
	textOnClick,
	icon,
	accentColorText = 'text-red-500',
}: TextLinkProps) => {
	return (
		<button className='flex flex-wrap items-center ' onClick={textOnClick}>
			<a
				className={`inline-flex items-center ${accentColorText} mr-2 font-bold md:mb-2 lg:mb-0`}>
				<span className='mr-2'>{children}</span>
				{icon && <span className='h-4 w-4'>{icon}</span>}
			</a>
		</button>
	);
};

export default TextLink;
