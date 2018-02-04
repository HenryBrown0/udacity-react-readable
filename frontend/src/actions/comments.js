import axios from 'axios';
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function fetchPostComments(postID){
	const request = axios.get(`${URL}posts/${postID}/comments`,{headers});
	return dispatch => {
		request.then(({data}) => {
			console.log(`Comment Action ${postID}`)
			dispatch({
				type: FETCH_POST_COMMENTS,
				postID: postID,
				postComments: data
			})
		})
	}
}
