import { ReactNode } from 'react';

export interface IconTagProps {
	children: ReactNode;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const IconTag = ({
	children,
	accentColorBackground = 'bg-red-50',
	accentColorText = 'text-red-500',
}: IconTagProps) => {
	return (
		<div
			className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${accentColorBackground} ${accentColorText}`}>
			{children}
		</div>
	);
};

export default IconTag;
