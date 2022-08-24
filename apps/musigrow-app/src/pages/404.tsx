import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const NotFound: NextPage = (locale) => {
	const { t } = useTranslation('common');

	return (
		<>
			<Head>
				<title>{t('notFound.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<section className='flex h-full w-full flex-col items-center justify-center uppercase'>
				<p className='text-9xl font-black'>404</p>
				<p>{t('notFound.title')}</p>
			</section>
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

export default NotFound;
