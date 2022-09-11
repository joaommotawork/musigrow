import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import cookie from 'react-cookies';
import { useTranslation } from 'next-i18next';
// @ts-ignore
import Menu from 'react-burger-menu/lib/menus/scaleRotate';
import NotificationsSystem, {
	bootstrapTheme,
	dismissNotification,
	GrowTransition,
	setUpNotifications,
} from 'reapop';
import { FaTimes, FaUserAlt } from 'react-icons/fa';
import classNames from 'classnames';
import { FooterTypeOne as Footer, HeaderTypeOne as Header } from 'musigrow-ui';
import { useAppSelector, useAppDispatch } from '@app/hooks';
import {
	openMenu,
	closeMenu,
} from '@features/reactBurgerMenu/reactBurgerMenuSlice';
import NProgress from '@components/NProgress/NProgress';
import reactBurgerMenuStyles from '@styles/reactBurgerMenuStyles';

const Layout = ({ children }: { children: ReactNode }) => {
	const { t } = useTranslation('common');
	const router = useRouter();
	const { asPath, pathname, query } = router;

	const dispatch = useAppDispatch();
	const [isSSR, setIsSSR] = useState(true);
	const notifications = useAppSelector((state) => state.notifications);
	const isOpen = useAppSelector((state) => state.reactBurgerMenu.isOpen);

	useEffect(() => {
		setIsSSR(false);
	}, []);
	// 1. Retrieve the notifications to display.

	setUpNotifications({
		defaultProps: {
			position: 'bottom-right',
			dismissAfter: 5000,
			dismissible: true,
			showDismissButton: true,
			allowHTML: true,
		},
	});

	const selectedLang = (lang: string) => {
		return router.locale === lang ? 'text-red-500' : '';
	};

	const setDefaultLang = (lang: string) => {
		cookie.save('NEXT_LOCALE', lang, {});
		router.push(
			{
				pathname,
				query,
			},
			asPath,
			{ locale: lang },
		);
	};

	const menuItemClasses = (selected: boolean) =>
		classNames({
			'cursor-pointer !outline-none': true,
			'text-red-500': selected,
		});

	return (
		<div
			id='outer-container'
			className='h-full bg-gray-100 dark:bg-gray-500'>
			<Menu
				isOpen={isOpen}
				pageWrapId={'page-wrap'}
				outerContainerId={'outer-container'}
				customBurgerIcon={false}
				customCrossIcon={false}
				onClose={() => dispatch(closeMenu())}
				styles={reactBurgerMenuStyles}
				className='relative flex flex-col text-3xl uppercase text-white outline-none'>
				<button
					className='mb-10 outline-none'
					aria-label={t('layout.menu.close')}
					onClick={() => dispatch(closeMenu())}>
					<FaTimes className='h-4 w-4' />
				</button>
				<a
					id='home'
					onClick={() => router.push('/')}
					className={menuItemClasses(router.asPath === '/')}>
					{t('layout.menu.home')}
				</a>
				<a
					id='news'
					onClick={() => router.push('/news')}
					className={menuItemClasses(router.asPath === '/news')}>
					{t('layout.menu.news')}
				</a>
				<a
					id='members'
					onClick={() => router.push('/members')}
					className={menuItemClasses(router.asPath === '/members')}>
					{t('layout.menu.members')}
				</a>
				<a
					id='gallery'
					onClick={() => router.push('/gallery')}
					className={menuItemClasses(router.asPath === '/gallery')}>
					{t('layout.menu.gallery')}
				</a>
				<a
					id='songs'
					onClick={() => router.push('/songs')}
					className={menuItemClasses(router.asPath === '/songs')}>
					{t('layout.menu.songs')}
				</a>
			</Menu>
			<main id='page-wrap' className='flex h-full flex-col bg-white'>
				<Header
					image={
						<Image
							src='/static/images/logo/FullLogoWhite.svg'
							alt={t('layout.header.logo')}
							width={200}
							height={50}
						/>
					}
					logoOnClick={() => {
						router.push('/');
					}}
					menuBarsOnClick={() => dispatch(openMenu())}
					icons={
						<div className='flex flex-col items-center justify-center gap-5 text-white md:flex-row'>
							<div className='flex items-center justify-center gap-5 text-white'>
								<a
									className={`${selectedLang(
										'en',
									)} cursor-pointer`}
									onClick={() => setDefaultLang('en')}>
									EN
								</a>
								|
								<a
									className={`${selectedLang(
										'pt',
									)} cursor-pointer`}
									onClick={() => setDefaultLang('pt')}>
									PT
								</a>
							</div>
							<a
								id='contact'
								href={`${process.env.STRAPI_URL}/dashboard`}
								target='_blank'
								/* onClick={() => router.push('/admin')}
								className={`${menuItemClasses(
									router.asPath === '/admin',
								)} text-white`} */
							>
								<FaUserAlt className='h-4 w-4' />
							</a>
						</div>
					}
				/>
				<NProgress />
				{!isSSR && (
					<NotificationsSystem
						smallScreenBreakpoint={500}
						// 2. Pass the notifications you want Reapop to display.
						notifications={notifications}
						// 3. Pass the function used to dismiss a notification.
						dismissNotification={(id) =>
							dispatch(dismissNotification(id))
						}
						// 4. Pass a builtIn theme or a custom theme.
						theme={bootstrapTheme}
						components={{ Transition: GrowTransition }}
					/>
				)}
				<div className='mt-56 w-full flex-grow px-5 py-10 md:mt-16 lg:mt-20 lg:px-40 2xl:px-80'>
					{children}
				</div>
				<Footer
					image={
						<Image
							src='/static/images/logo/SmallLogoBlack.svg'
							alt={t('layout.footer.logo')}
							width={50}
							height={50}
						/>
					}
					logoOnClick={() => {
						router.push('/');
					}}
				/>
			</main>
		</div>
	);
};

export default Layout;
