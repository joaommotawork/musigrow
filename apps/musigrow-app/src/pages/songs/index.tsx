import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { BlogTypeOne, FeatureTypeOne, Headline } from 'musigrow-ui';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FaMusic } from 'react-icons/fa';

const Songs: NextPage = ({ locale, songsCollection }: any) => {
	const { t } = useTranslation('common');
	const router = useRouter();
	const dispatch = useAppDispatch();

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

	return (
		<>
			<Head>
				<title>{`${t('songs.headTitle')} | Orquestra ISTEC`}</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				<Headline subHeadlineText={t('songs.subTitle')}>
					{t('songs.title')}
				</Headline>
				<FeatureTypeOne items={songsCollectionItems(songsCollection)} />
			</div>
		</>
	);
};

export async function getStaticProps({ locale }: any) {
	const resSongsCollection = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/songs-collection?locale=${locale}`,
	);
	const songsCollection = resSongsCollection.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			songsCollection,
		},
		revalidate: 60,
	};
}

export default Songs;
