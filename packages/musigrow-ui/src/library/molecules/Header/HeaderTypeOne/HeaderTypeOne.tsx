import { ReactNode } from 'react';
import { FaBars } from 'react-icons/fa';

export interface HeaderTypeOneProps {
	image: ReactNode;
	logoOnClick?: (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => void;
	icons: ReactNode;
	menuBarsOnClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

export const HeaderTypeOne = ({
	image,
	logoOnClick,
	icons,
	menuBarsOnClick,
}: HeaderTypeOneProps) => {
	return (
		<header className='fixed top-0 z-10 flex w-full flex-col items-center justify-center bg-white p-5 dark:bg-black md:flex-row md:justify-between lg:px-40 2xl:px-80'>
			<a
				className='title-font mb-4 flex h-12 w-48 cursor-pointer items-center justify-center font-medium text-black md:mb-0'
				onClick={logoOnClick}>
				{image}
			</a>
			<div className='flex flex-col items-center justify-center gap-5 md:flex-row'>
				{icons}
				<FaBars
					className='h-8 w-8 cursor-pointer text-black dark:text-white'
					onClick={menuBarsOnClick}
				/>
			</div>
		</header>
	);
};

export default HeaderTypeOne;
