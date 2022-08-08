module.exports = {
	env: {
		'browser': true,
		'es2021': true,
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'@infinumjs/eslint-config-nextjs-ts',
		'airbnb',
		'airbnb/hooks',
		'next',
		'prettier',
	],
	rules: {},
	overrides: [
		{
			files: [
				'**/__tests__/**/*.[jt]s?(x)',
				'**/?(*.)+(spec|test).[jt]s?(x)',
			],
			plugins: ['testing-library', 'jest'],
			extends: ['plugin:jest/all', 'plugin:testing-library/react'],
		},
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['../tsconfig/musigrow-app.json'],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
