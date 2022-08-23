import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	ContactTypeOne,
	ContactTypeOneProps,
} from '@library/molecules/Contact/ContactTypeOne/ContactTypeOne';
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
	title: 'Molecules/Contact/ContactTypeOne',
	component: ContactTypeOne,
} as Meta;

const Template: Story<ContactTypeOneProps> = (args) => (
	<ContactTypeOne {...args} />
);

export const Default = Template.bind({});
Default.args = {
	mapIframe: (
		<iframe
			width='100%'
			height='100%'
			frameBorder='0'
			marginHeight={0}
			marginWidth={0}
			title='map'
			scrolling='no'
			src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
			style={{
				filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
			}}
		/>
	),
	title: 'Contact Us',
	description: (
		<>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</>
	),
	contacts: (
		<>
			<FaEnvelope className='h-8' />
			<FaWhatsapp className='h-8' />
			<FaLinkedin className='h-8' />
			<FaFacebook className='h-8' />
			<FaInstagram className='h-8' />
			<FaSpotify className='h-8' />
			<FaYoutube className='h-8' />
			<FaSoundcloud className='h-8' />
		</>
	),
};
