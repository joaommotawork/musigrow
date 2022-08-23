import { ReactNode } from 'react';

export interface FooterTypeOneProps {
	image: ReactNode;
	logoOnClick?: (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => void;
	icons?: ReactNode;
}

export const FooterTypeOne = ({
	image,
	logoOnClick,
	icons,
}: FooterTypeOneProps) => {
	return (
		<footer className='mx-auto flex w-full flex-col items-center p-5 py-8 sm:flex-row lg:px-40 2xl:px-80'>
			<a
				className='title-font flex h-12 w-12 cursor-pointer items-center justify-center font-medium text-black md:justify-start'
				onClick={logoOnClick}>
				{image}
			</a>
			<p className='mt-4 text-sm text-black sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4'>
				© {new Date().getFullYear()} Musigrow —
				<a
					href='https://instagram.com/joaommota.work'
					className='ml-1 text-black'
					rel='noopener noreferrer'
					target='_blank'>
					@joaommota.work
				</a>
			</p>
			{icons && (
				<span className='mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'>
					{icons}
				</span>
			)}
		</footer>
	);
};

export default FooterTypeOne;
