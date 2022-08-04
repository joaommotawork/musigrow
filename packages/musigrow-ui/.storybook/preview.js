import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/main.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
