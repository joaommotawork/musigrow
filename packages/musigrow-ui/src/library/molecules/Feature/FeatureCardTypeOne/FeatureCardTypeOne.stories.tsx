import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	FeatureCardTypeOne,
	FeatureCardTypeOneProps,
} from '@library/molecules/Feature/FeatureCardTypeOne/FeatureCardTypeOne';
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
	title: 'Molecules/Feature/FeatureCardTypeOne',
	component: FeatureCardTypeOne,
} as Meta;

const Template: Story<FeatureCardTypeOneProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<FeatureCardTypeOne {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	title: 'Title',
	description: 'Description',
	icon: <FaEnvelope className='h-4' />,
	callToActionText: 'Learn More',
	callToActionOnClick: () => console.log('Learn More Clicked!'),
};
