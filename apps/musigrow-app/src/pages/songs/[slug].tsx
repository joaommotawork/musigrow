import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import Image from 'next/image';
import { Headline } from 'musigrow-ui';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import { FaPaperclip } from 'react-icons/fa';
import YouTube, { YouTubeProps } from 'react-youtube';

const Songs: NextPage = ({ locale, songs }: any) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();

	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	const opts: YouTubeProps['opts'] = {
		height: '400',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	return (
		<>
			<Head>
				<title>{t('songs.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex w-full flex-col gap-5'>
				{songs ? (
					<>
						<Headline subHeadlineText={t('songs.subTitle')}>
							{`${songs?.attributes.name} - ${songs?.attributes.author}`}
						</Headline>
						{songs?.attributes.description}
						<div className='grid w-full grid-cols-1 justify-items-center gap-5 overflow-hidden sm:grid-cols-2'>
							<div className='w-full min-w-fit'>
								{songs?.attributes.lyrics ? (
									<ReactMarkdown
										components={{
											h1({
												node,
												className,
												children,
												...props
											}) {
												return (
													<h1
														className='text-xl font-bold'
														{...props}>
														{children}
													</h1>
												);
											},
										}}
										remarkPlugins={[
											remarkGfm,
											remarkEmoji,
										]}>
										{songs?.attributes.lyrics}
									</ReactMarkdown>
								) : (
									<div>{t('songs.noLyrics')}</div>
								)}
							</div>
							<div className='flex w-full min-w-fit flex-col gap-5'>
								{songs?.attributes.youtubeVideoId && (
									<YouTube
										videoId={
											songs?.attributes.youtubeVideoId
										}
										opts={opts}
										onReady={onPlayerReady}
									/>
								)}
								{songs?.attributes.urlMusicSheet && (
									<div className='flex items-center gap-2'>
										<span className='font-bold'>
											{t('songs.musicSheet')}:
										</span>
										<a
											href={
												songs?.attributes.urlMusicSheet
											}
											target='_blank'>
											<FaPaperclip className='h-4 cursor-pointer' />
										</a>
									</div>
								)}
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const resSongsCollection = await axios.get(
		`${process.env.STRAPI_URL}/api/songs-collection?locale=pt`,
	);
	const songsCollection = resSongsCollection.data.data;

	console.log('songsCollection', songsCollection);

	const paths = songsCollection.map((item: any) => {
		return { params: { slug: item.attributes.slug.toString() } };
	});

	return { paths, fallback: true };
}

export async function getStaticProps({ locale, params }: any) {
	const resSongs = await axios.get(
		`${process.env.STRAPI_URL}/api/songs-collection?filters\[slug][$contains]=${params.slug}&locale=${locale}&populate=gallery`,
	);
	const songs = resSongs.data.data;

	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
			songs: songs[0],
		},
	};
}

export default Songs;
