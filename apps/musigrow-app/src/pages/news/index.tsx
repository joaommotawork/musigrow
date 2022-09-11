import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { BlogTypeOne, Headline } from 'musigrow-ui';
import axios from 'axios';
import { useRouter } from 'next/router';

const News: NextPage = ({ locale, newsCollection }: any) => {
	const { t } = useTranslation('common');
	const router = useRouter();
	const dispatch = useAppDispatch();

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
				callToActionText: t('news.learnMore'),
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
				<title>{t('news.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				<Headline subHeadlineText={t('news.subTitle')}>
					{t('news.title')}
				</Headline>
				<BlogTypeOne items={newsCollectionItems(newsCollection)} />
			</div>
		</>
	);
};

export async function getStaticProps({ locale }: any) {
	const resNewsCollection = await axios.get(
		`${process.env.STRAPI_URL}/api/news-collection?populate=gallery&locale=${locale}`,
	);
	const newsCollection = resNewsCollection.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			newsCollection,
		},
		revalidate: 60,
	};
}

export default News;
