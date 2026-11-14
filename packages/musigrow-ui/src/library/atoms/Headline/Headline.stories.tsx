import { Headline, HeadlineProps } from "@library/atoms/Headline/Headline";
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

export default {
	title: "Atoms/Headline",
	component: Headline,
} as Meta;

const Template: Story<HeadlineProps> = (args) => (
	<div className="flex h-[500px] w-[500px] items-center justify-center">
		<Headline {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: "Headline",
	subHeadlineText: "Sub Headline",
};
