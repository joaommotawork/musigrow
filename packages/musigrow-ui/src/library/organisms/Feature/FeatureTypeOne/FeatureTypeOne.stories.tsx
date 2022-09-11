import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	FeatureTypeOne,
	FeatureTypeOneProps,
} from '@library/organisms/Feature/FeatureTypeOne/FeatureTypeOne';
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaSoundcloud,
	FaSpotify,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa';

export default {
	title: 'Organisms/Feature/FeatureTypeOne',
	component: FeatureTypeOne,
} as Meta;

const Template: Story<FeatureTypeOneProps> = (args) => (
	<FeatureTypeOne {...args} />
);

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			title: 'Title',
			description: 'Description',
			icon: <FaEnvelope className='h-4' />,
			callToActionText: 'Learn More',
			callToActionOnClick: () => console.log('Learn More Clicked!'),
		},
		{
			title: 'Title',
			description: 'Description',
			icon: <FaEnvelope className='h-4' />,
			callToActionText: 'Learn More',
			callToActionOnClick: () => console.log('Learn More Clicked!'),
		},
		{
			title: 'Title',
			description: 'Description',
			icon: <FaEnvelope className='h-4' />,
			callToActionText: 'Learn More',
			callToActionOnClick: () => console.log('Learn More Clicked!'),
		},
	],
};
