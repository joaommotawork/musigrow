import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '@atoms/Button/Button';

export default {
	title: 'Atoms/Button',
	component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { label: 'Default' };
