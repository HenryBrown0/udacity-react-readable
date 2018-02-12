import lodash from 'lodash';
import {
	FETCH_CATEGORY_POSTS,
	FETCH_POST,
	ADD_POST,
} from '../actions/posts';

function posts(state = {}, action){
	switch (action.type){
		case FETCH_CATEGORY_POSTS :
			return {
				...state,
				[action.categoryPosts.category]: action.categoryPosts.posts
			}
		case FETCH_POST :
			const { post } = action;
			const statePost = state.post ? state.post[post.category] : null
			return {
				...state,
				[post.category]: lodash.unionBy(statePost, [post], 'id')
			}
		case ADD_POST :
			const { newPost } = action;
			state[newPost.category].push({ newPost })
			return {
				...state,
			}
		default :
			return state
	}
}

export default posts
