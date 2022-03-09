module.exports = {
	locales: ['en', 'pt'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
	},
	defaultNS: 'common',
	/* loadLocaleFrom: (lang, ns) =>
		// You can use a dynamic import, fetch, whatever. You should
		// return a Promise with the JSON file.
		import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default), */
};
