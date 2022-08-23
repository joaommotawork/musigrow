export interface TextTagProps {
	children: string;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const TextTag = ({
	children,
	accentColorBackground = 'bg-red-50',
	accentColorText = 'text-red-500',
}: TextTagProps) => {
	return (
		<span
			className={`w-fit rounded ${accentColorBackground} py-1 px-2 text-xs font-medium tracking-widest ${accentColorText} uppercase`}>
			{children}
		</span>
	);
};

export default TextTag;
