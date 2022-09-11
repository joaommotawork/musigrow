import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import Image from 'next/image';
import { Headline } from 'musigrow-ui';
import axios from 'axios';

const News: NextPage = ({ locale, news }: any) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	return (
		<>
			<Head>
				<title>{t('news.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				{news ? (
					<>
						<Headline subHeadlineText={t('news.subTitle')}>
							{news?.attributes.title}
						</Headline>
						<Image
							src={
								news?.attributes.gallery.data[0].attributes.url
							}
							alt={t('home.slider.one')}
							width={1280}
							height={641}
							layout='responsive'
						/>
						{news?.attributes.content}
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const resNewsCollection = await axios.get(
		`${process.env.STRAPI_URL}/api/news-collection?locale=pt`,
	);
	const newsCollection = resNewsCollection.data.data;

	const paths = newsCollection.map((item: any) => {
		return { params: { slug: item.attributes.slug.toString() } };
	});

	console.log('paths', paths);

	return { paths, fallback: true };
}

export async function getStaticProps({ locale, params }: any) {
	const resNews = await axios.get(
		`${process.env.STRAPI_URL}/api/news-collection?filters\[slug][$contains]=${params.slug}&locale=${locale}&populate=gallery`,
	);
	const news = resNews.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			news: news[0],
		},
	};
}

export default News;
