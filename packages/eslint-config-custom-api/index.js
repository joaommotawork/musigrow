module.exports = {
	env: {
		'browser': true,
		'es2021': true,
		'jest/globals': true,
	},
	plugins: ['sonarjs'],
	extends: ['eslint:recommended', 'plugin:sonarjs/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
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
				project: ['../tsconfig/musigrow-api.json'],
			},
		},
	],
};
