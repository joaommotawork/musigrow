import { useRouter } from "next/router";
import NProgressLibrary from "nprogress";
import { useEffect } from "react";

export default function NProgress() {
	const { events } = useRouter();

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const start = () => {
			timeout = setTimeout(NProgressLibrary.start, 100);
		};

		const done = () => {
			clearTimeout(timeout);
			NProgressLibrary.done();
		};

		events.on("routeChangeStart", start);
		events.on("routeChangeComplete", done);
		events.on("routeChangeError", done);
		return () => {
			events.off("routeChangeStart", start);
			events.off("routeChangeComplete", done);
			events.off("routeChangeError", done);
		};
	}, [events]);
	return <></>;
}
