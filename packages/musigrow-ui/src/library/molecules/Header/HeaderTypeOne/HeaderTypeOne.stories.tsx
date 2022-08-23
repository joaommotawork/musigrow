import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	HeaderTypeOne,
	HeaderTypeOneProps,
} from '@library/molecules/Header/HeaderTypeOne/HeaderTypeOne';
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
	title: 'Molecules/Header/HeaderTypeOne',
	component: HeaderTypeOne,
} as Meta;

const Template: Story<HeaderTypeOneProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<HeaderTypeOne {...args} />
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
