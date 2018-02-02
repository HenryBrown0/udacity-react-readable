export const ADD_POST = 'ADD_POST'

export function addPost ({ id, title }) {
	return {
		type: ADD_POST,
		id,
		title,
	}
}
