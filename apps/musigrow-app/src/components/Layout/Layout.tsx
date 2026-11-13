import { useAppDispatch, useAppSelector } from "@app/hooks";
import NProgress from "@components/NProgress/NProgress";
import {
	closeMenu,
	openMenu,
} from "@features/reactBurgerMenu/reactBurgerMenuSlice";
import reactBurgerMenuStyles from "@styles/reactBurgerMenuStyles";
import classNames from "classnames";
import { FooterTypeOne as Footer, HeaderTypeOne as Header } from "musigrow-ui";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ReactNode } from "react";
// @ts-expect-error
import Menu from "react-burger-menu/lib/menus/scaleRotate";
import cookie from "react-cookies";
import { FaTimes, FaUserAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }: { children: ReactNode }) => {
	const { t } = useTranslation("common");
	const router = useRouter();
	const { asPath, pathname, query } = router;

	const isMobile = useMediaQuery({ query: "(min-width: 769px)" });

	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.reactBurgerMenu.isOpen);

	const selectedLang = (lang: string) => {
		return router.locale === lang ? "text-red-500" : "";
	};

	const setDefaultLang = (lang: string) => {
		cookie.save("NEXT_LOCALE", lang, {});
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
			"cursor-pointer !outline-none": true,
			"text-red-500": selected,
		});

	const IconsMenu = () => {
		return (
			<span className="flex flex-col items-center justify-center gap-5 text-white md:flex-row">
				<div className="flex items-center justify-center gap-5 text-white">
					<button
						type="button"
						className={`${selectedLang("en")} cursor-pointer`}
						onClick={() => setDefaultLang("en")}
					>
						EN
					</button>
					|
					<button
						type="button"
						className={`${selectedLang("pt")} cursor-pointer`}
						onClick={() => setDefaultLang("pt")}
					>
						PT
					</button>
				</div>
				<a
					id="contact"
					href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/dashboard`}
					target="_blank"
					rel="noopener"
				>
					<FaUserAlt className="h-4 w-4" />
				</a>
			</span>
		);
	};

	return (
		<div id="outer-container" className="h-full bg-gray-100 dark:bg-gray-500">
			<Menu
				isOpen={isOpen}
				pageWrapId={"page-wrap"}
				outerContainerId={"outer-container"}
				customBurgerIcon={false}
				customCrossIcon={false}
				onClose={() => dispatch(closeMenu())}
				styles={reactBurgerMenuStyles}
				className={`relative flex flex-col text-3xl uppercase text-white outline-none ${
					!isMobile && "!w-full"
				}`}
			>
				<button
					className="mb-10 outline-none"
					aria-label={t("layout.menu.close")}
					onClick={() => dispatch(closeMenu())}
				>
					<FaTimes className="h-4 w-4" />
				</button>
				<a
					id="home"
					href="/"
					onClick={(event) => {
						event.preventDefault();
						router.push("/");
					}}
					className={menuItemClasses(router.asPath === "/")}
				>
					{t("layout.menu.home")}
				</a>
				<a
					id="news"
					href="/news"
					onClick={(event) => {
						event.preventDefault();
						router.push("/news");
					}}
					className={menuItemClasses(router.asPath === "/news")}
				>
					{t("layout.menu.news")}
				</a>
				<a
					id="members"
					href="/members"
					onClick={(event) => {
						event.preventDefault();
						router.push("/members");
					}}
					className={menuItemClasses(router.asPath === "/members")}
				>
					{t("layout.menu.members")}
				</a>
				<a
					id="gallery"
					href="/gallery"
					onClick={(event) => {
						event.preventDefault();
						router.push("/gallery");
					}}
					className={menuItemClasses(router.asPath === "/gallery")}
				>
					{t("layout.menu.gallery")}
				</a>
				<a
					id="songs"
					href="/songs"
					onClick={(event) => {
						event.preventDefault();
						router.push("/songs");
					}}
					className={menuItemClasses(router.asPath === "/songs")}
				>
					{t("layout.menu.songs")}
				</a>

				{!isMobile ? (
					<span className="mt-10 text-base outline-none">
						<IconsMenu />
					</span>
				) : (
					<></>
				)}
			</Menu>
			<main id="page-wrap" className="flex h-full flex-col bg-white">
				<Header
					image={
						<Image
							src="/static/images/logo/FullLogoWhite.svg"
							alt={t("layout.header.logo")}
							width={200}
							height={50}
						/>
					}
					logoOnClick={() => {
						router.push("/");
					}}
					menuBarsOnClick={() => dispatch(openMenu())}
					icons={isMobile ? <IconsMenu /> : <></>}
				/>
				<NProgress />
				<div className="mt-20 w-full flex-grow px-5 py-10 md:mt-16 lg:mt-20 lg:px-40 2xl:px-80">
					{children}
				</div>
				<Footer
					image={
						<Image
							src="/static/images/logo/SmallLogoBlack.svg"
							alt={t("layout.footer.logo")}
							width={50}
							height={50}
						/>
					}
					logoOnClick={() => {
						router.push("/");
					}}
				/>
			</main>
		</div>
	);
};

export default Layout;
