import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	TeamTypeOne,
	TeamTypeOneProps,
} from '@library/organisms/Team/TeamTypeOne/TeamTypeOne';
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
	title: 'Organisms/Team/TeamTypeOne',
	component: TeamTypeOne,
} as Meta;

const Template: Story<TeamTypeOneProps> = (args) => <TeamTypeOne {...args} />;

export const Default = Template.bind({});
Default.args = {
	items: [
		{
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
		},
		{
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
		},
		{
			image: (
				<img
					alt='team'
					className='mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center'
					src='https://dummyimage.com/80x80'
				/>
			),
			children: 'Team Member',
			categories: [
				{
					name: 'Category',
					accentColorBackground: 'bg-blue-50',
					accentColorText: 'text-blue-500',
				},
				{
					name: 'Category',
					accentColorBackground: 'bg-red-50',
					accentColorText: 'text-red-500',
				},
				{
					name: 'Category',
					accentColorBackground: 'bg-green-50',
					accentColorText: 'text-green-500',
				},
			],
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
		},
	],
};
