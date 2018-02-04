//React
import React from 'react';
//Components
import '../App.css';
import GetPost from '../Post/GetPost';
//Content
const Category = ({ match }) => {
	const category = match.params.category;
	const postID = match.params.postID;
  return(
		<div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3
			col-lg-offset-4">
			<GetPost category={category} postID ={postID}/>
		</div>
	)
}

export default Category
