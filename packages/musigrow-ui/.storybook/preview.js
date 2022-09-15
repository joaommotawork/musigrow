import React from 'react';
import '@styles/main.css';
import '@storybook/addon-actions/register';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
	const ReactDOM = require('react-dom');
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			method: 'alphabetical',
			order: [
				'Introduction',
				'Styleguide',
				'Atoms',
				['Readme', '*'],
				'Molecules',
				['Readme', '*'],
				'Organisms',
				['Readme', '*'],
			],
			locales: 'en-US',
		},
	},
};
