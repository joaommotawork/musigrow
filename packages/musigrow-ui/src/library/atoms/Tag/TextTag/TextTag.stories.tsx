import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextTag, TextTagProps } from '@library/atoms/Tag/TextTag/TextTag';

export default {
	title: 'Atoms/Tag/TextTag',
	component: TextTag,
} as Meta;

const Template: Story<TextTagProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<TextTag {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Category',
};
