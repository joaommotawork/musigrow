export function first(items: string[]) {
	for (const item of items) {
		if (item) {
			return item;
		}
	}
	return undefined;
}
