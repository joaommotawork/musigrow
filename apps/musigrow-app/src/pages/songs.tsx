import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { Headline } from 'musigrow-ui';

const Songs: NextPage = (locale) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	return (
		<>
			<Head>
				<title>{t('songs.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				<Headline subHeadlineText={t('songs.subTitle')}>
					{t('songs.title')}
				</Headline>
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

export default Songs;
