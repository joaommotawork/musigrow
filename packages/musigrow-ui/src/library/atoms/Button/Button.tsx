import React from 'react';

export interface ButtonProps {
	children: string;
	buttonOnClick?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
	accentColorBackground?: string;
	accentColorBackgroundHover?: string;
}

export const Button = ({
	children,
	buttonOnClick,
	accentColorBackground = 'bg-red-500',
	accentColorBackgroundHover = 'bg-red-600',
}: ButtonProps) => {
	return (
		<button
			className={`rounded border-0 ${accentColorBackground} py-2 px-6 text-lg text-white hover:${accentColorBackgroundHover} focus:outline-none`}
			onClick={buttonOnClick}>
			{children}
		</button>
	);
};

export default Button;
