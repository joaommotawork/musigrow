import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import {
	StatisticsCardTypeOne,
	StatisticsCardTypeOneProps,
} from '@library/molecules/Statistics/StatisticsCardTypeOne/StatisticsCardTypeOne';
import { FaEnvelope } from 'react-icons/fa';

export default {
	title: 'Molecules/Statistics/StatisticsCardTypeOne',
	component: StatisticsCardTypeOne,
} as Meta;

const Template: Story<StatisticsCardTypeOneProps> = (args) => (
	<div className='flex h-[500px] w-[500px] items-center justify-center'>
		<StatisticsCardTypeOne {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: 'Messages',
	count: 2700,
	icon: <FaEnvelope className='h-10 w-10' />,
};
