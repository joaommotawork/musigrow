import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	TeamCardTypeOne,
	TeamCardTypeOneProps,
} from '@library/molecules/Team/TeamCardTypeOne/TeamCardTypeOne';
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
	title: 'Molecules/Team/TeamCardTypeOne',
	component: TeamCardTypeOne,
} as Meta;

const Template: Story<TeamCardTypeOneProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<TeamCardTypeOne {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	image: (
		<img
			alt='team'
			className='mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
			src='https://dummyimage.com/80x80'
		/>
	),
	children: 'Team Member',
	categories: [{ name: 'Category' }],
	description: 'Description',
	contacts: (
		<>
			<FaEnvelope className='h-4' />
			<FaWhatsapp className='h-4' />
			<FaLinkedin className='h-4' />
			<FaFacebook className='h-4' />
			<FaInstagram className='h-4' />
			<FaSpotify className='h-4' />
			<FaYoutube className='h-4' />
			<FaSoundcloud className='h-4' />
		</>
	),
};
