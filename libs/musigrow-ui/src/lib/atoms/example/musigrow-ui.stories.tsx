import { Story, Meta } from '@storybook/react';
import { MusigrowUi, MusigrowUiProps } from './musigrow-ui';

export default {
	component: MusigrowUi,
	title: 'MusigrowUi',
} as Meta;

const Template: Story<MusigrowUiProps> = (args) => <MusigrowUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
