import axios from 'axios';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function fetchCategoryPosts(category){
	const request = axios.get(`${URL}${category}/posts`,{headers});
	return dispatch => {
		request.then(({data}) => {
			dispatch({
				type: FETCH_CATEGORY_POSTS,
				categoryPosts: { category: category, posts: data}
			})
		})
	}
}

export function fetchPost(postID){
	const request = axios.get(`${URL}posts/${postID}`,{headers});
	return dispatch => {
		request.then(({data}) => {
			dispatch({
				type: FETCH_POST,
				post: data
			})
		})
	}
}

export function addPost(newPost){
	const request = axios.post(`${URL}posts`,newPost,{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Add post successful")
			dispatch({
				type: ADD_POST,
				newPost: response.data
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function deletePost(deletePost){
	const request = axios.delete(`${URL}posts/${deletePost.id}`,{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Delete post successful")
			dispatch({
				type: DELETE_POST,
				deletePost
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function votePost(vote){
	const request = axios
		.post(`${URL}posts/${vote.post.id}`,{ option: vote.type },{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Vote post successful")
			dispatch({
				type: UPDATE_POST,
				updatePost: response.data
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}

export function editPost(edit){
	const request = axios
		.put(`${URL}posts/${edit.id}`,
			{ title: edit.title, body: edit.body  },{headers});
	return dispatch => {
		request.then((response) => {
			console.log("Edit post successful")
			dispatch({
				type: UPDATE_POST,
				updatePost: response.data
			})
		})
		.catch(function (error) {
    	console.error(error);
  	});
	}
}
