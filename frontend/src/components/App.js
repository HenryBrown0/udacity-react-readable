import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';
import './App.css';
//components
import CategoryPanel from './CategoryPanel';

const App = (props) => {
	const { categories, fetchPosts } = props;
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1 onClick={() => fetchPosts()}>Readable</h1>
				</div>
			</div>

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
		fetchPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
