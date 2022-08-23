import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	BlogCardTypeOne,
	BlogCardTypeOneProps,
} from '@library/molecules/Blog/BlogCardTypeOne/BlogCardTypeOne';

export default {
	title: 'Molecules/Blog/BlogCardTypeOne',
	component: BlogCardTypeOne,
} as Meta;

const Template: Story<BlogCardTypeOneProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<BlogCardTypeOne {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	image: (
		<img
			className='w-full object-cover object-center md:h-36 lg:h-48'
			src='https://dummyimage.com/720x400'
			alt='blog'
		/>
	),
	category: 'Category',
	title: 'The Catalyzer',
	description:
		'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
	callToActionText: 'Learn More',
	callToActionOnClick: () => console.log('Call To Action Clicked'),
};
