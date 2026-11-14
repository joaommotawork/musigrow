import { userEvent, within } from "@storybook/testing-library";
export const Clicked = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		userEvent.click(canvas.getByRole("button"));
	},
};
