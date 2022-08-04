/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('tailwind-config/tailwind.config.js')],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
};
