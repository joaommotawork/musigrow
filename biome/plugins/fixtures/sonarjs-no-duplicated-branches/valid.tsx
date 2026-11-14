export function pick(flag: boolean) {
	if (flag) {
		return 1;
	} else {
		return 2;
	}
}
export const differ = (flag: boolean) => (flag ? "a" : "b");
