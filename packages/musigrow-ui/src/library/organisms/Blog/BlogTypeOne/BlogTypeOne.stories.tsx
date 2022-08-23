import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	BlogTypeOne,
	BlogTypeOneProps,
} from '@library/organisms/Blog/BlogTypeOne/BlogTypeOne';

export default {
	title: 'Organisms/Blog/BlogTypeOne',
	component: BlogTypeOne,
} as Meta;

const Template: Story<BlogTypeOneProps> = (args) => <BlogTypeOne {...args} />;

export const Default = Template.bind({});
Default.args = {
	items: [
		{
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
		},
		{
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
		},
		{
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
		},
	],
};
