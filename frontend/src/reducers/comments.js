import lodash from 'lodash';
import {
	FETCH_POST_COMMENTS,
	ADD_POST_COMMENT,
} from '../actions/comments';

function comments(state = {}, action){
	switch (action.type){
		case FETCH_POST_COMMENTS :
			const { postComments } = action;
			return {
				...state,
				[postComments[0].parentId]: lodash.unionBy(state[postComments[0].parentId], postComments, 'id')
			}
		case ADD_POST_COMMENT :
			const { newComment } = action;
			state[newComment.parentId].push(
				{
					id: newComment.id,
					timestamp: newComment.timestamp,
		      body: newComment.body,
		      author: newComment.author,
		      parentId: newComment.parentId,
		      voteScore: 1,
		      deleted: false,
		      parentDeleted: false
				})
			return {
				...state,
			}
		/*case VOTE_COMMENT :
			const { voteComment } = action;
			console.log(newComment.parentId)
			return {
				...state,
				[voteComment.parentId]: lodash.unionBy(state[voteComment.parentId], comment, 'id')
			}*/
		default :
			return state
	}
}

export default comments
