//React
import React from 'react';
//Redux
import { connect } from 'react-redux'
//Components
import './App.css';
import CategoryPanel from './CategoryPanel';

const Home = (props) => {
	const { categories } = props;
	return (
		<div>
			<div className="row">
			{
				categories.map(c =>
					<CategoryPanel
						key={c.category}
						category={c.category}
						posts={c.posts}
					/>
				)
			}
			</div>
		</div>
	);
}

function mapStateToProps ({ posts }) {
  return {
		categories: [
			{
				category: 'React',
				posts: posts.react
			},{
				category: 'Redux',
				posts: posts.redux
			},{
				category: 'Udacity',
				posts: posts.udacity
			}
		]
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
