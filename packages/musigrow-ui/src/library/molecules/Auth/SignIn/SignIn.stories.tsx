import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { SignIn, SignInProps } from '@library/molecules/Auth/SignIn/SignIn';

export default {
	title: 'Molecules/Auth/SignIn',
	component: SignIn,
} as Meta;

const Template: Story<SignInProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<SignIn {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
