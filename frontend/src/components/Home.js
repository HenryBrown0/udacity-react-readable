//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from '../actions';
//Components
import './App.css';
import CategoryPanel from './CategoryPanel';
//Content
class Home extends Component {
	componentDidMount(){
		this.props.fetchCategories();
		this.props.fetchPosts();
	}
	render() {
		const { categories, posts } = this.props;
		return (
			<div>
				<div className="row">
				{
					categories && posts ? categories.map(c =>
						<CategoryPanel
							key={c.path}
							category={c.category}
							posts={posts.filter(p => p.category === c.path)}
						/>
					) : null
				}
				</div>
			</div>
		);
	}
}

function mapStateToProps ({ app }) {
  return {
		categories: app.categories,
		posts: app.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchCategories: (data) => dispatch(fetchCategories(data)),
		fetchPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
