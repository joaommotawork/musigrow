export function bump(total: number, step: number) {
	let value = total;
	value += step;
	value = -step;
	return value;
}
