import React from 'react';
import classNames from 'classnames';

export enum IconPositions {
	LEFT = 'small',
	RIGHT = 'medium',
}

export enum ButtonSizes {
	SMALL = 'small',
	MEDIUM = 'medium',
	LARGE = 'large',
}

export enum ButtonTypes {
	BUTTON = 'button',
	TEXT = 'text',
}

export interface ButtonProps {
	label?: string;
	icon?: React.ReactNode;
	iconPosition?: IconPositions;
	buttonType?: ButtonTypes;
	buttonSize?: ButtonSizes;
	classNameButton?: string;
	classNameText?: string;
	classNameIcon?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
	label,
	icon,
	iconPosition,
	buttonType,
	buttonSize,
	classNameButton,
	classNameText,
	classNameIcon,
	onClick,
}: ButtonProps) => {
	const buttonClasses = classNames({
		'text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg':
			true,
	});

	return (
		<>
			<button type='button' className={buttonClasses} onClick={onClick}>
				{icon && iconPosition === IconPositions.LEFT && icon}
				{label && <span>{label}</span>}
				{icon && iconPosition === IconPositions.RIGHT && icon}
			</button>
		</>
	);
};
