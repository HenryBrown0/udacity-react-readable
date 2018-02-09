import axios from 'axios';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function fetchPostComments(postID){
	const request = axios.get(`${URL}posts/${postID}/comments`,{headers});
	return dispatch => {
		request.then(({data}) => {
			dispatch({
				type: FETCH_POST_COMMENTS,
				postComments: data,
				postID: postID
			})
		})
	}
}

export function addComment(newComment){
	const request = axios.post(`${URL}comments`,newComment,{headers});
	return dispatch => {
		request.then((response) => {
			dispatch({
				type: ADD_COMMENT,
				newComment
			})
		})
		.catch(function (error) {
    	console.log(error);
  	});
	}
}

export function deleteComment(deleteComment){
	const request = axios.delete(`${URL}comments/${deleteComment.id}`,{headers});
	return dispatch => {
		request.then((response) => {
			console.log(response)
			dispatch({
				type: DELETE_COMMENT,
				deleteComment
			})
		})
		.catch(function (error) {
    	console.log(error);
  	});
	}
}

export function voteComment(vote){
	console.log(vote)
	const request = axios.post(`${URL}comments/${vote.comment.id}`,vote.type,{headers});
	return dispatch => {
		request.then((response) => {
			console.log(response)
			/*dispatch({
				type: VOTE_COMMENT,
				voteComment
			})*/
		})
		.catch(function (error) {
    	console.log(error);
  	});
	}
}
