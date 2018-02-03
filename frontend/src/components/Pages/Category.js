//React
import React from 'react';
//Components
import '../App.css';
import CategoryPanel from '../Category/CategoryPanel';
//Content
const Category = ({ match }) => {
	const category = match.params.category;
  return(
		<div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3
			col-lg-offset-4">
			<h2>
				{category}
			</h2>
				<CategoryPanel category={category} />
		</div>
	)
}

export default Category
