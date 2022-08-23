import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { IconTag, IconTagProps } from '@library/atoms/Tag/IconTag/IconTag';
import { FaUser } from 'react-icons/fa';

export default {
	title: 'Atoms/Tag/IconTag',
	component: IconTag,
} as Meta;

const Template: Story<IconTagProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<IconTag {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: <FaUser />,
};
