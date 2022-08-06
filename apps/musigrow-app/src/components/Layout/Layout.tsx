import Menu from 'react-burger-menu/lib/menus/scaleRotate';
import { useAppSelector, useAppDispatch } from '@app/hooks';
import { closeMenu } from '@features/reactBurgerMenu/reactBurgerMenuSlice';
import reactBurgerMenuStyles from '@styles/reactBurgerMenu';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.reactBurgerMenu.isOpen);

	return (
		<div id='outer-container' className='h-full bg-gray-300'>
			<Menu
				isOpen={isOpen}
				pageWrapId={'page-wrap'}
				outerContainerId={'outer-container'}
				customBurgerIcon={false}
				customCrossIcon={false}
				onClose={() => dispatch(closeMenu())}
				styles={reactBurgerMenuStyles}>
				<a id='home' className='menu-item' href='/'>
					Home
				</a>
				<a id='about' className='menu-item' href='/about'>
					About
				</a>
				<a id='contact' className='menu-item' href='/contact'>
					Contact
				</a>
				<button
					aria-label='Close Menu'
					onClick={() => dispatch(closeMenu())}>
					Close Menu
				</button>
			</Menu>
			<main id='page-wrap' className='h-full overflow-auto bg-white'>
				{children}
			</main>
		</div>
	);
};

export default Layout;