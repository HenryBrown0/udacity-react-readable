import axios from 'axios';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function fetchPostComments(postID){
	const request = axios.get(`${URL}posts/${postID}/comments`,{headers});
	return dispatch => {
		request.then(({data}) => {
			console.log("Fetch comments successful")
			dispatch({
				type: FETCH_POST_COMMENTS,
				postComments: data,
				postID: postID
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function addComment(newComment){
	const request = axios.post(`${URL}comments`,newComment,{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Add comment successful")
			dispatch({
				type: ADD_COMMENT,
				newComment
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function deleteComment(deleteComment){
	const request = axios.delete(`${URL}comments/${deleteComment.id}`,{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Delete comment successful")
			dispatch({
				type: DELETE_COMMENT,
				deleteComment
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function voteComment(vote){
	const request = axios
		.post(`${URL}comments/${vote.comment.id}`,{ option: vote.type },{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Vote comment successful")
			dispatch({
				type: UPDATE_COMMENT,
				comment: response.data
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function editComment(edit){
	const request = axios
		.put(`${URL}comments/${edit.id}`,
			{ timestamp: edit.timestamp, body: edit.body  },{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Edit comment successful")
			dispatch({
				type: UPDATE_COMMENT,
				comment: response.data
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}
