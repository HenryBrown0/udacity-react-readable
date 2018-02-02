import { combineReducers } from 'redux';

import {
	ADD_POST,
	FETCH_POSTS,
} from '../actions';

function posts(state = {}, action){
	switch (action.type){
		case ADD_POST :
			const { post } = action
			return {
				...state,
				post: post
			}
		case FETCH_POSTS :
			const { payload } = action;
			console.log(payload)
			return {
				...state,
				react: payload.filter(p => p.category === 'react'),
				redux: payload.filter(p => p.category === 'redux'),
				udacity: payload.filter(p => p.category === 'udacity')
			}
		default :
			return state
	}
}

export default combineReducers({
	posts,
})
