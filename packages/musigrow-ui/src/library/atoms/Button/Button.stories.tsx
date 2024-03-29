import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '@library/atoms/Button/Button';

export default {
	title: 'Atoms/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<Button {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
	buttonOnClick: () => console.log('Button Clicked'),
};
