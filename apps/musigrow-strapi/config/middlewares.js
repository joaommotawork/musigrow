module.exports = [
	'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:'],
					'script-src': [
						"'self'",
						"'unsafe-inline'",
						'blob:',
						'cdn.jsdelivr.net',
					],
					'img-src': ['*'],
					'media-src': ["'self'", 'data:', 'blob:'],
					'upgradeInsecureRequests': null,
				},
			},
		},
	},
	'strapi::cors',
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
