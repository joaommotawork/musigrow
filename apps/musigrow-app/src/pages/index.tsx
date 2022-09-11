import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
	Navigation,
	Pagination,
	Parallax,
	A11y,
	EffectCoverflow,
	Lazy,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMusic,
	FaRegHourglass,
	FaSoundcloud,
	FaSpotify,
	FaTrophy,
	FaUserTie,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa';
import {
	BlogTypeOne,
	ContactTypeOne,
	Headline,
	StatisticsTypeOne as Statistics,
} from 'musigrow-ui';
import { useAppDispatch } from '@app/hooks';
import axios from 'axios';
import { useRouter } from 'next/router';

const Home: NextPage = ({ locale, home, newsCollection }: any) => {
	const { t } = useTranslation('common');
	const router = useRouter();
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	console.log('HOME', home);

	const newsCollectionItems = (newsCollectionData: any) => {
		return newsCollectionData.map((item: any) => {
			return {
				image: (
					<img
						className='w-full object-cover object-center md:h-36 lg:h-48'
						src={item.attributes.gallery.data[0].attributes.url}
						alt='blog'
					/>
				),
				category: item.attributes.category,
				title: item.attributes.title,
				description: item.attributes.content,
				callToActionText: t('home.news.learnMore'),
				callToActionOnClick: () =>
					router.push(
						'/news/[slug]',
						`/news/${item.attributes.slug}`,
					),
			};
		});
	};

	return (
		<>
			<Head>
				<title>{t('home.headTitle')} | Orquestra ISTEC</title>
			</Head>
			<div className='flex w-full flex-col gap-5'>
				<Swiper
					effect={'coverflow'}
					lazy={true}
					grabCursor={true}
					centeredSlides={true}
					spaceBetween={50}
					slidesPerView={'auto'}
					autoplay={{
						delay: 5000,
						disableOnInteraction: true,
					}}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					keyboard={{
						enabled: true,
					}}
					pagination={{
						clickable: true,
					}}
					onSlideChange={() => console.log('Slide Change')}
					onSwiper={(swiper) => console.log(swiper)}
					modules={[
						Lazy,
						EffectCoverflow,
						Parallax,
						Navigation,
						Pagination,
						A11y,
					]}
					style={{
						//@ts-ignore
						'--swiper-navigation-color': '#fff',
						'--swiper-pagination-color': '#fff',
					}}
					className='h-full w-full'>
					<SwiperSlide>
						<Image
							src='/static/images/banner/Banner.png'
							alt={t('home.slider.one')}
							width={1280}
							height={641}
							layout='responsive'
						/>
					</SwiperSlide>
				</Swiper>
				<Statistics
					items={[
						{
							children: t('home.statistics.years'),
							count: home.attributes.statistics.years,
							icon: <FaRegHourglass className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
						{
							children: t('home.statistics.members'),
							count: home.attributes.statistics.members,
							icon: <FaUserTie className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
						{
							children: t('home.statistics.prizes'),
							count: home.attributes.statistics.prizes,
							icon: <FaTrophy className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
						{
							children: t('home.statistics.songs'),
							count: home.attributes.statistics.songs,
							icon: <FaMusic className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
					]}
				/>
				<Headline subHeadlineText={t('home.history.subTitle')}>
					{t('home.history.title')}
				</Headline>
				<section className='py-1 text-justify indent-8 md:py-5'>
					{home.attributes.history}
				</section>
				<Headline subHeadlineText={t('home.news.subTitle')}>
					{t('home.news.title')}
				</Headline>
				<BlogTypeOne items={newsCollectionItems(newsCollection)} />
				<ContactTypeOne
					mapIframe={
						<iframe
							width='100%'
							height='100%'
							frameBorder='0'
							marginHeight={0}
							marginWidth={0}
							title='map'
							scrolling='no'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.7922652379184!2d-9.162199784653458!3d38.76846837959081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932edd62bb521%3A0x1ee0de4e32108704!2sISTEC%20-%20Institute%20of%20Advanced%20Technologies!5e0!3m2!1sen!2spt!4v1660649606169!5m2!1sen!2spt'
							style={{
								filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
							}}
							loading='lazy'
						/>
					}
					title={home.attributes.findUsTitle}
					description={<>{home.attributes.findUsDescription}</>}
					contacts={
						<>
							<a
								href={`mailto:${home.attributes.contacts.email}`}
								target='_blank'>
								<FaEnvelope className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://wa.me/${home.attributes.contacts.phoneNumber}`}
								target='_blank'>
								<FaWhatsapp className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://pt.linkedin.com/in/${home.attributes.contacts.linkedin}`}
								target='_blank'>
								<FaLinkedin className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://pt-pt.facebook.com/${home.attributes.contacts.facebook}`}
								target='_blank'>
								<FaFacebook className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://www.instagram.com/${home.attributes.contacts.instagram}`}
								target='_blank'>
								<FaInstagram className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://spotify.com/${home.attributes.contacts.spotify}`}
								target='_blank'>
								<FaSpotify className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://www.youtube.com/channel/${home.attributes.contacts.youtube}`}
								target='_blank'>
								<FaYoutube className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href={`https://www.soundcloud.com/${home.attributes.contacts.soundcloud}`}
								target='_blank'>
								<FaSoundcloud className='h-8 w-8 cursor-pointer' />
							</a>
						</>
					}
				/>
			</div>
		</>
	);
};

export async function getStaticProps({ locale }: any) {
	const resHome = await axios.get(
		`${process.env.STRAPI_URL}/api/home?populate=statistics,contacts&locale=${locale}`,
	);
	const home = resHome.data.data;
	const resNewsCollection = await axios.get(
		`${process.env.STRAPI_URL}/api/news-collection?populate=gallery&locale=${locale}&_sort=date:DESC&_start=0&_limit=4`,
	);
	const newsCollection = resNewsCollection.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			home,
			newsCollection,
		},
		revalidate: 60,
	};
}

export default Home;
