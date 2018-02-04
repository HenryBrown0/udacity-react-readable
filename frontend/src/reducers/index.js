import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';

import {
	FETCH_CATEGORIES,
} from '../actions';

function app(state = {}, action){
	switch (action.type){
		case FETCH_CATEGORIES :
			const { categories } = action;
			return {
				...state,
				categories
			}
		default :
			return state
	}
}

export default combineReducers({
	app,
	posts,
	comments
})
