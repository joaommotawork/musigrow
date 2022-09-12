export interface HeadlineProps {
	children?: string;
	subHeadlineText?: string;
	accentColorBackground?: string;
	accentColorText?: string;
}

export const Headline = ({
	children,
	subHeadlineText,
	accentColorBackground = 'bg-red-500',
	accentColorText = 'text-red-500',
}: HeadlineProps) => {
	return (
		<div className='mb-6 w-full lg:mb-0 lg:w-1/2'>
			{subHeadlineText && (
				<h2
					className={`title-font mb-1 text-xs font-medium tracking-widest ${accentColorText}`}>
					{subHeadlineText}
				</h2>
			)}
			{children && (
				<h1 className='title-font mb-2 text-2xl font-medium text-black sm:text-3xl'>
					{children}
				</h1>
			)}
			<div className={`h-1 w-20 rounded ${accentColorBackground}`}></div>
		</div>
	);
};

export default Headline;
