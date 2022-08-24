import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { BlogTypeOne, Headline } from 'musigrow-ui';

const News: NextPage = (locale) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	return (
		<>
			<Head>
				<title>{t('news.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				<Headline subHeadlineText={t('news.subTitle')}>
					{t('news.title')}
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
			</div>
		</>
	);
};

export async function getStaticProps(context: any) {
	return {
		props: {
			...(await serverSideTranslations(context.locale, ['common'])),
		},
	};
}

export default News;
