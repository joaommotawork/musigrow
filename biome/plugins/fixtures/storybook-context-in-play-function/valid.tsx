declare const Base: { play: (context?: unknown) => Promise<void> };
export const Extended = {
	play: async (context: unknown) => {
		await Base.play(context);
	},
};
