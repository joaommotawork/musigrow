import { userEvent, within } from "@storybook/testing-library";
export const Clicked = {
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole("button"));
	},
};
