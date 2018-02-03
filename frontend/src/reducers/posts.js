import lodash from 'lodash';
import {
	FETCH_CATEGORY_POSTS,
	FETCH_POST,
} from '../actions';

function posts(state = {}, action){
	switch (action.type){
		case FETCH_CATEGORY_POSTS :
			return {
				...state,
				[action.categoryPosts.category]: action.categoryPosts.posts
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
