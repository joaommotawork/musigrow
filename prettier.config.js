module.exports = {
	singleQuote: true,
	printWidth: 80,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	quoteProps: 'consistent',
	jsxSingleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: 'always',
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: 'packages/tailwind-config/tailwind.config.js',
};