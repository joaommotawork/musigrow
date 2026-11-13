export function label(kind: string) {
	switch (kind) {
		case "a":
			return "A";
		case "b":
			return "B";
		default:
			return "?";
	}
}
