import NProgressLibrary from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NProgress() {
	const router = useRouter();

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const start = () => {
			timeout = setTimeout(NProgressLibrary.start, 100);
		};

		const done = () => {
			clearTimeout(timeout);
			NProgressLibrary.done();
		};

		router.events.on('routeChangeStart', start);
		router.events.on('routeChangeComplete', done);
		router.events.on('routeChangeError', done);
		return () => {
			router.events.off('routeChangeStart', start);
			router.events.off('routeChangeComplete', done);
			router.events.off('routeChangeError', done);
		};
	}, []);
	return <></>;
}
