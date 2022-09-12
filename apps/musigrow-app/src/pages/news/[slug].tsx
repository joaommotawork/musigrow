import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import Image from 'next/image';
import { FeatureTypeOne, Headline } from 'musigrow-ui';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaMusic } from 'react-icons/fa';

const News: NextPage = ({ locale, news }: any) => {
	const { t } = useTranslation('common');
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [event, setEvent] = useState<any>();

	const songsCollectionItems = (songsCollectionData: any) => {
		return songsCollectionData.map((item: any) => {
			return {
				title: item.attributes.name,
				author: item.attributes.author,
				description: item.attributes.description,
				icon: <FaMusic className='h-4' />,
				callToActionText: t('songs.learnMore'),
				callToActionOnClick: () =>
					router.push(
						'/songs/[slug]',
						`/songs/${item.attributes.slug}`,
					),
			};
		});
	};

	useEffect(() => {
		const getEvent = async () => {
			const resEvent = await axios.get(
				`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events-collection?filters\[slug][$contains]=${news.attributes.event.data.attributes.slug}&populate=songs`,
			);
			setEvent(resEvent.data.data[0]);
		};
		if (news?.attributes?.event?.data?.attributes?.slug) {
			getEvent();
		}
	}, []);

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
						{event && (
							<div className='flex w-full flex-col gap-5'>
								<Headline subHeadlineText={t('news.songs')} />
								<FeatureTypeOne
									items={songsCollectionItems(
										event.attributes.songs.data,
									)}
								/>
							</div>
						)}
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
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-collection?locale=pt`,
	);
	const newsCollection = resNewsCollection.data.data;

	const paths = newsCollection.map((item: any) => {
		return { params: { slug: item.attributes.slug.toString() } };
	});

	return { paths, fallback: true };
}

export async function getStaticProps({ locale, params }: any) {
	const resNews = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/news-collection?filters\[slug][$contains]=${params.slug}&locale=${locale}&populate=gallery,event`,
	);
	const news = await resNews.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			news: news[0],
		},
	};
}

export default News;
