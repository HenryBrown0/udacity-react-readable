import axios from 'axios';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

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
