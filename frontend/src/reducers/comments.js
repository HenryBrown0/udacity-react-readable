import lodash from 'lodash';
import {
	FETCH_POST_COMMENTS,
	ADD_COMMENT,
	DELETE_COMMENT,
	VOTE_COMMENT,
} from '../actions/comments';

function comments(state = {}, action){
	switch (action.type){
		case FETCH_POST_COMMENTS :
			const { postComments, postID } = action;
			if(postComments[0]){
				return {
					...state,
					[postComments[0].parentId]:
						lodash.unionBy(state[postComments[0].parentId], postComments, 'id')
				}
			}else{
				return {
					...state,
					[postID]: []
				}
			}
		case ADD_COMMENT :
			const { newComment } = action;
			state[newComment.parentId].push({
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
		case DELETE_COMMENT :
			const { deleteComment } = action;
			return {
				...state,
				[deleteComment.parentId]: state[deleteComment.parentId]
					.filter(c => c.id !== deleteComment.id)
			}
		case VOTE_COMMENT :
			const { voteComment } = action;
			return {
				...state,
				[voteComment.parentId]: state[voteComment.parentId]
					.filter(c => c.id !== voteComment.id).concat(voteComment)
			}
		default :
			return state
	}
}

export default comments
