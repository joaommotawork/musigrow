import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { Headline, TeamTypeOne } from 'musigrow-ui';
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaSoundcloud,
	FaSpotify,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa';

const Members: NextPage = (locale) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	return (
		<>
			<Head>
				<title>{t('members.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				<Headline subHeadlineText={t('members.subTitle')}>
					{t('members.title')}
				</Headline>
				<TeamTypeOne
					items={[
						{
							image: (
								<img
									alt='team'
									className='mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
									src='https://dummyimage.com/80x80'
								/>
							),
							children: 'Team Member',
							category: 'Category',
							description: 'Description',
							contacts: (
								<>
									<FaEnvelope className='h-4' />
									<FaWhatsapp className='h-4' />
									<FaLinkedin className='h-4' />
									<FaFacebook className='h-4' />
									<FaInstagram className='h-4' />
									<FaSpotify className='h-4' />
									<FaYoutube className='h-4' />
									<FaSoundcloud className='h-4' />
								</>
							),
						},
						{
							image: (
								<img
									alt='team'
									className='mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
									src='https://dummyimage.com/80x80'
								/>
							),
							children: 'Team Member',
							category: 'Category',
							description: 'Description',
							contacts: (
								<>
									<FaEnvelope className='h-4' />
									<FaWhatsapp className='h-4' />
									<FaLinkedin className='h-4' />
									<FaFacebook className='h-4' />
									<FaInstagram className='h-4' />
									<FaSpotify className='h-4' />
									<FaYoutube className='h-4' />
									<FaSoundcloud className='h-4' />
								</>
							),
						},
						{
							image: (
								<img
									alt='team'
									className='mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
									src='https://dummyimage.com/80x80'
								/>
							),
							children: 'Team Member',
							category: 'Category',
							description: 'Description',
							contacts: (
								<>
									<FaEnvelope className='h-4' />
									<FaWhatsapp className='h-4' />
									<FaLinkedin className='h-4' />
									<FaFacebook className='h-4' />
									<FaInstagram className='h-4' />
									<FaSpotify className='h-4' />
									<FaYoutube className='h-4' />
									<FaSoundcloud className='h-4' />
								</>
							),
						},
					]}
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

export default Members;
