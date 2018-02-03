//React
import React from 'react';
//Components
import '../App.css';
import GetCategory from '../Category/GetCategory';
//Content
const Category = ({ match }) => {
	const category = match.params.category;
  return(
		<div className="col-sm-12 col-md-6 col-lg-4 col-md-offset-3
			col-lg-offset-4">
			<h2>
				{category}
			</h2>
				<GetCategory category={category} />
		</div>
	)
}

export default Category
