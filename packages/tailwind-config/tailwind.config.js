module.exports = {
	content: [`./src/**/*.{js,ts,jsx,tsx}`],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('tailwindcss-debug-screens'),
	],
};
