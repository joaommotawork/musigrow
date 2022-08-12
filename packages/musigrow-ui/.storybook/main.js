const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
		'@storybook/addon-a11y',
		'@storybook/addon-interactions',
		'storybook-addon-designs',
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					// test: [/\.stories\.jsx?$/], This is default
					include: [path.resolve(__dirname, '../src')], // You can specify directories
				},
				loaderOptions: {
					prettierConfig: { printWidth: 80, singleQuote: false },
				},
			},
		},
		'storybook-dark-mode',
		'@storybook/addon-actions',
		'@storybook/addon-viewport',
		'@storybook/addon-docs',
		'@storybook/addon-controls',
		'@storybook/addon-backgrounds',
		'@storybook/addon-toolbars',
		'@storybook/addon-measure',
		'@storybook/addon-outline',
		'@storybook/addon-jest',
	],
	framework: '@storybook/react',
	webpackFinal: async (config) => {
		config.resolve.plugins.push(new TsconfigPathsPlugin());
		return config;
	},
};
