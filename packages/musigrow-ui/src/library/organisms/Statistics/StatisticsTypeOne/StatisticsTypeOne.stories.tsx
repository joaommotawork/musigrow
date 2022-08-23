import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	StatisticsTypeOne,
	StatisticsTypeOneProps,
} from '@library/organisms/Statistics/StatisticsTypeOne/StatisticsTypeOne';
import { FaEnvelope } from 'react-icons/fa';

export default {
	title: 'Organisms/Statistics/StatisticsTypeOne',
	component: StatisticsTypeOne,
} as Meta;

const Template: Story<StatisticsTypeOneProps> = (args) => (
	<div>
		<StatisticsTypeOne {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			children: 'Messages',
			count: 2700,
			icon: <FaEnvelope className='h-10 w-10' />,
		},
		{
			children: 'Messages',
			count: 2700,
			icon: <FaEnvelope className='h-10 w-10' />,
		},
		{
			children: 'Messages',
			count: 2700,
			icon: <FaEnvelope className='h-10 w-10' />,
		},
		{
			children: 'Messages',
			count: 2700,
			icon: <FaEnvelope className='h-10 w-10' />,
		},
	],
};
