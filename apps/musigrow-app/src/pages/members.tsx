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
import axios from 'axios';

const Members: NextPage = ({ locale, membersCollection }: any) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	console.log('membersCollection', membersCollection);

	const membersCollectionItems = (membersCollectionData: any) => {
		return membersCollectionData.map((member: any) => {
			return {
				image: (
					<img
						alt='team'
						className='mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
						src={member.attributes.photo.data.attributes.url}
					/>
				),
				children: `${member.attributes.firstName} ${member.attributes.lastName}`,
				category: t(
					`members.instruments.types.${member.attributes.instruments.data[0].attributes.type}`,
				),
				description: t(
					`members.vocalRange.${member.attributes.vocalRange}`,
				),
				contacts: (
					<>
						{member.attributes.contacts.email && (
							<a
								href={`mailto:${member.attributes.contacts.email}`}
								target='_blank'>
								<FaEnvelope className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.phoneNumber && (
							<a
								href={`https://wa.me/${member.attributes.contacts.phoneNumber}`}
								target='_blank'>
								<FaWhatsapp className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.linkedin && (
							<a
								href={`https://www.linkedin.com/in/${member.attributes.contacts.linkedin}`}
								target='_blank'>
								<FaLinkedin className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.facebook && (
							<a
								href={`https://www.facebook.com/${member.attributes.contacts.facebook}`}
								target='_blank'>
								<FaFacebook className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.instagram && (
							<a
								href={`https://www.instagram.com/${member.attributes.contacts.instagram}`}
								target='_blank'>
								<FaInstagram className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.spotify && (
							<a
								href={`https://open.spotify.com/artist/${member.attributes.contacts.spotify}`}
								target='_blank'>
								<FaSpotify className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.youtube && (
							<a
								href={`https://www.youtube.com/${member.attributes.contacts.youtube}`}
								target='_blank'>
								<FaYoutube className='h-4 cursor-pointer' />
							</a>
						)}
						{member.attributes.contacts.soundcloud && (
							<a
								href={`https://www.soundcloud.com/${member.attributes.contacts.soundcloud}`}
								target='_blank'>
								<FaSoundcloud className='h-4 cursor-pointer' />
							</a>
						)}
					</>
				),
			};
		});
	};

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
					items={membersCollectionItems(membersCollection)}
				/>
			</div>
		</>
	);
};

export async function getStaticProps({ locale }: any) {
	const resMembersCollection = await axios.get(
		`${process.env.STRAPI_URL}/api/members-collection?populate=*`,
	);
	const membersCollection = resMembersCollection.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			membersCollection,
		},
	};
}

export default Members;
