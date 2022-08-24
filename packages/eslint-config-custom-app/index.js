module.exports = {
	env: {
		'browser': true,
		'es2021': true,
		'jest/globals': true,
	},
	plugins: ['sonarjs'],
	extends: [
		'eslint:recommended',
		'plugin:sonarjs/recommended',
		'plugin:storybook/recommended',
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
