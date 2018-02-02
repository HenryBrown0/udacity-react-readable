import axios from 'axios';
export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function addPost ({ id, title }) {
	return {
		type: ADD_POST,
		id,
		title,
	}
}

export function fetchPosts(){
	const request = axios.get(`${URL}posts`,{headers});
	return dispatch => {
		request.then(({data})=> {
			dispatch({
				type: FETCH_POSTS,
				payload: data
			})
		})
	}
}
