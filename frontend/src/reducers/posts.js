import lodash from 'lodash';
import {
	FETCH_POSTS,
	FETCH_CATEGORY_POSTS,
	FETCH_POST,
} from '../actions';

function posts(state = {}, action){
	switch (action.type){
		case FETCH_POSTS :
			return {
				...state,
				post: lodash.unionBy(state.post, action.posts, 'id')
			}
		case FETCH_CATEGORY_POSTS :
			return {
				...state,
				post: lodash.unionBy(state.post, action.categoryPosts, 'id')
			}
		case FETCH_POST :
			return {
				...state,
				post: lodash.unionBy(state.post, action.post, 'id')
			}
		default :
			return state
	}
}

export default posts
