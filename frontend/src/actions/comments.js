import axios from 'axios';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT';

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function fetchPostComments(postID){
	const request = axios.get(`${URL}posts/${postID}/comments`,{headers});
	return dispatch => {
		request.then(({data}) => {
			dispatch({
				type: FETCH_POST_COMMENTS,
				postComments: data
			})
		})
	}
}

export function addPostComment(newComment){
	const request = axios.post(`${URL}comments`,newComment,{headers});
	return dispatch => {
		request.then((response) => {
			console.log(response)
			dispatch({
				type: ADD_POST_COMMENT,
				newComment
			})
		})
		.catch(function (error) {
    	console.log(error);
  	});
	}
}
