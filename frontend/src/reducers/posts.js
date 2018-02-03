import {
	FETCH_CATEGORY_POSTS,
} from '../actions';

function posts(state = {}, action){
	switch (action.type){
		case FETCH_CATEGORY_POSTS :
			const { categoryPosts } = action;
			return {
				...state,
				[categoryPosts.category]: categoryPosts
			}
		default :
			return state
	}
}

export default posts
