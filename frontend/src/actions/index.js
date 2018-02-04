import axios from 'axios';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';
export const FETCH_POST = 'FETCH_POST';

const URL = 'http://localhost:3001/';
const headers = { 'Authorization': 'whatever-you-want' };

export function fetchCategories(){
	const request = axios.get(`${URL}categories`,{headers});
	return dispatch => {
		request.then(({data}) => {
			dispatch({
				type: FETCH_CATEGORIES,
				categories: data.categories
			})
		})
	}
}

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
