import lodash from 'lodash';
import {
	FETCH_POST_COMMENTS,
} from '../actions/comments';

function comments(state = {}, action){
	switch (action.type){
		case FETCH_POST_COMMENTS :
			const { postID, postComments } = action;
			return {
				...state,
				[postID]: lodash.unionBy(state[postID], postComments)
			}
		default :
			return state
	}
}

export default comments
