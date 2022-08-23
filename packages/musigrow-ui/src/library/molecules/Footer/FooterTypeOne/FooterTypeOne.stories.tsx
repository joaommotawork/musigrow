import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	FooterTypeOne,
	FooterTypeOneProps,
} from '@library/molecules/Footer/FooterTypeOne/FooterTypeOne';

export default {
	title: 'Molecules/Footer/FooterTypeOne',
	component: FooterTypeOne,
} as Meta;

const Template: Story<FooterTypeOneProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<FooterTypeOne {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	image: (
		<img
			alt='team'
			className='h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
			src='https://dummyimage.com/80x80'
		/>
	),
};
