import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'th1scb',

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},

	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
	},
});
