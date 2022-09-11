import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { Headline } from 'musigrow-ui';
import axios from 'axios';

const Gallery: NextPage = ({ locale, galleryPage }: any) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	console.log(galleryPage);

	return (
		<>
			<Head>
				<title>{t('gallery.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				<Headline subHeadlineText={t('gallery.subTitle')}>
					{t('gallery.title')}
				</Headline>
				<div className='grid w-full grid-cols-1 justify-items-center gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3'>
					{galleryPage.attributes.images.data.map((image: any) => {
						return (
							<img
								alt='gallery'
								src={image.attributes.url}
								className='max-h-[275.55px] w-full object-cover object-center'
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export async function getStaticProps({ locale }: any) {
	const resGalleryPage = await axios.get(
		`${process.env.STRAPI_URL}/api/gallery?populate=*`,
	);
	const galleryPage = resGalleryPage.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			galleryPage,
		},
	};
}

export default Gallery;
