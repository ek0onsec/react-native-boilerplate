import {actions} from "../actions";

export const initialState = {
	example: 'Default example value in context',
	count: 1,
};

export function reducer(state, action) {
	switch (action.type) {
		case actions.EDIT_EXAMPLE:
			return { ...state, example: action.key };
		case actions.INCREMENT_COUNT:
			return { ...state, count: state.count+1};
		default:
			return {...state};
	}
}
