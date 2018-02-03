import { combineReducers } from 'redux';

import {
	FETCH_CATEGORIES,
	FETCH_POSTS,
} from '../actions';

function app(state = {}, action){
	switch (action.type){
		case FETCH_CATEGORIES :
			const { categories } = action;
			return {
				...state,
				categories
			}
		case FETCH_POSTS :
			const { posts } = action;
			return {
				...state,
				posts
			}
		default :
			return state
	}
}

export default combineReducers({
	app
})
