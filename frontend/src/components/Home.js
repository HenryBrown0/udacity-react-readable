//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategories, fetchPosts } from '../actions';
//Router
import { Link } from 'react-router-dom';
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
						<div key={c.path} className="col-sm-12 col-md-6 col-lg-4">
							<h2>
								{c.name}
								<small>
									<Link to={"category/"+c.path+"/"}>View categorie individually</Link>
								</small>
							</h2>
							<CategoryPanel
								category={c.name}
								posts={posts.filter(p => p.category === c.path)}
							/>
						</div>
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
