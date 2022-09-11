import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta
					name='description'
					content='Official Page of Orquestra ISTEC'
				/>

				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://musigrow.vercel.app/'
				/>
				<meta property='og:title' content='Orquestra ISTEC' />
				<meta
					property='og:description'
					content='Official Page of Orquestra ISTEC'
				/>
				<meta property='og:image' content='' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://musigrow.vercel.app/'
				/>
				<meta property='twitter:title' content='Orquestra ISTEC' />
				<meta
					property='twitter:description'
					content='Official Page of Orquestra ISTEC'
				/>
				<meta property='twitter:image' content='' />

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/static/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/static/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/static/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link
					rel='mask-icon'
					href='/static/favicon/safari-pinned-tab.svg'
					color='#000000'
				/>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='theme-color' content='#000000' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
