import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { TextLink, TextLinkProps } from '@library/atoms/TextLink/TextLink';
import { FaArrowRight } from 'react-icons/fa';

export default {
	title: 'Atoms/TextLink',
	component: TextLink,
} as Meta;

const Template: Story<TextLinkProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<TextLink {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Learn More',
	textOnClick: () => console.log('Text Link Clicked'),
	icon: <FaArrowRight />,
};
