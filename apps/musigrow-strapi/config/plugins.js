module.exports = ({ env }) => ({
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
	'duplicate-button': true,
	'upload': {
		config: {
			provider: 'cloudinary',
			providerOptions: {
				cloud_name: env('CLOUDINARY_NAME'),
				api_key: env('CLOUDINARY_KEY'),
				api_secret: env('CLOUDINARY_SECRET'),
			},
			actionOptions: {
				upload: {},
				delete: {},
			},
		},
	},
});
