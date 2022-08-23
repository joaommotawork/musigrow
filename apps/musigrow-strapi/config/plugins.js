module.exports = ({ env }) => ({
	'vercel-deploy': {
		enabled: true,
		config: {
			deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
			apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
			appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
			teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
			roles: ['strapi-super-admin'],
		},
	},
	'slugify': {
		enabled: true,
		config: {
			contentTypes: {
				news: {
					field: 'slug',
					references: 'title',
				},
			},
		},
	},
	'seo': {
		enabled: true,
	},
	'import-export-entries': {
		enabled: true,
	},
	'fast-content': {
		enabled: true,
	},
	'duplicate-button': true,
});
