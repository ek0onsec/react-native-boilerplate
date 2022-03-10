export const actions = {
	EDIT_EXAMPLE: "EDIT_EXAMPLE",
	INCREMENT_COUNT: "INCREMENT_COUNT",
}

export function editExample(key) {
	return {
		type: actions.EDIT_EXAMPLE,
		key: key,
	};
}

export function incrementCount() {
	return {
		type: actions.INCREMENT_COUNT
	};
}
