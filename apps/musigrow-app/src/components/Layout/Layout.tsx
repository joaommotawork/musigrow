import { ReactNode, useEffect, useState } from 'react';
import Menu from 'react-burger-menu/lib/menus/scaleRotate';
import NotificationsSystem, {
	atalhoTheme,
	dismissNotification,
	setUpNotifications,
} from 'reapop';
import { useAppSelector, useAppDispatch } from '@app/hooks';
import { closeMenu } from '@features/reactBurgerMenu/reactBurgerMenuSlice';
import NProgress from '@components/NProgress/NProgress';
import reactBurgerMenuStyles from '@styles/reactBurgerMenu';

const Layout = ({ children }: { children: ReactNode }) => {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	const dispatch = useAppDispatch();
	// 1. Retrieve the notifications to display.
	const notifications = useAppSelector((state) => state.notifications);
	const isOpen = useAppSelector((state) => state.reactBurgerMenu.isOpen);

	setUpNotifications({
		defaultProps: {
			position: 'top-right',
			dismissible: true,
		},
	});

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
				<NProgress />
				{!isSSR && (
					<NotificationsSystem
						// 2. Pass the notifications you want Reapop to display.
						notifications={notifications}
						// 3. Pass the function used to dismiss a notification.
						dismissNotification={(id) =>
							dispatch(dismissNotification(id))
						}
						// 4. Pass a builtIn theme or a custom theme.
						theme={atalhoTheme}
					/>
				)}
				{children}
			</main>
		</div>
	);
};

export default Layout;
