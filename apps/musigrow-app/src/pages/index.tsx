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

const Home: NextPage = (locale) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	return (
		<>
			<Head>
				<title>{t('homePage.headTitle')} | Orquestra ISTEC</title>
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
							alt={t('homePage.slider.one')}
							width={1280}
							height={641}
							layout='responsive'
						/>
					</SwiperSlide>
				</Swiper>
				<Statistics
					items={[
						{
							children: t('homePage.statistics.years'),
							count: 10,
							icon: <FaRegHourglass className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
						{
							children: t('homePage.statistics.members'),
							count: 20,
							icon: <FaUserTie className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
						{
							children: t('homePage.statistics.prizes'),
							count: 18,
							icon: <FaTrophy className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
						{
							children: t('homePage.statistics.songs'),
							count: 12,
							icon: <FaMusic className='h-10 w-10' />,
							accentColorText: 'text-black',
						},
					]}
				/>
				<Headline subHeadlineText={t('homePage.history.subTitle')}>
					{t('homePage.history.title')}
				</Headline>
				<section className='py-1 text-justify indent-8 md:py-5'>
					{t('homePage.history.description')}
				</section>
				<Headline subHeadlineText={t('homePage.news.subTitle')}>
					{t('homePage.news.title')}
				</Headline>
				<BlogTypeOne
					items={[
						{
							image: (
								<img
									className='w-full object-cover object-center md:h-36 lg:h-48'
									src='https://dummyimage.com/720x400'
									alt='blog'
								/>
							),
							category: 'Category',
							title: 'The Catalyzer',
							description:
								'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
							callToActionText: 'Learn More',
							callToActionOnClick: () =>
								console.log('Call To Action Clicked'),
						},
						{
							image: (
								<img
									className='w-full object-cover object-center md:h-36 lg:h-48'
									src='https://dummyimage.com/720x400'
									alt='blog'
								/>
							),
							category: 'Category',
							title: 'The Catalyzer',
							description:
								'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
							callToActionText: 'Learn More',
							callToActionOnClick: () =>
								console.log('Call To Action Clicked'),
						},
						{
							image: (
								<img
									className='w-full object-cover object-center md:h-36 lg:h-48'
									src='https://dummyimage.com/720x400'
									alt='blog'
								/>
							),
							category: 'Category',
							title: 'The Catalyzer',
							description:
								'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
							callToActionText: 'Learn More',
							callToActionOnClick: () =>
								console.log('Call To Action Clicked'),
						},
						{
							image: (
								<img
									className='w-full object-cover object-center md:h-36 lg:h-48'
									src='https://dummyimage.com/720x400'
									alt='blog'
								/>
							),
							category: 'Category',
							title: 'The Catalyzer',
							description:
								'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
							callToActionText: 'Learn More',
							callToActionOnClick: () =>
								console.log('Call To Action Clicked'),
						},
					]}
				/>
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
					title={t('homePage.contacts.title')}
					description={<>{t('homePage.contacts.description')}</>}
					contacts={
						<>
							<a
								href='mailto:secretaria@istec.pt'
								target='_blank'>
								<FaEnvelope className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href='https://wa.me/351910762748'
								target='_blank'>
								<FaWhatsapp className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href='https://pt.linkedin.com/school/istec'
								target='_blank'>
								<FaLinkedin className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href='https://pt-pt.facebook.com/ISTEC'
								target='_blank'>
								<FaFacebook className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href='https://www.instagram.com/istec.lisboa'
								target='_blank'>
								<FaInstagram className='h-8 w-8 cursor-pointer' />
							</a>
							<a href='https://spotify.com' target='_blank'>
								<FaSpotify className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href='https://www.youtube.com/channel/UCrhBjN0A6rkF-vxFzHgqmMA'
								target='_blank'>
								<FaYoutube className='h-8 w-8 cursor-pointer' />
							</a>
							<a
								href='https://www.soundcloud.com'
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
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			// Will be passed to the page component as props
		},
	};
}

export default Home;
