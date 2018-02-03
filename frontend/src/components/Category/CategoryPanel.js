//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchCategoryPosts } from '../../actions';
//components
import '../App.css';
import Post from '../Post/Post';

//Content
class CategoryPanel extends Component {
	componentDidMount(){
		this.props.fetchCategoryPosts(this.props.category);
	}
	render(){
		const { category, posts } = this.props;
		const categoryPosts = posts[category] ? posts[category]['posts'] : [];
		return (
			<div>
			{
				categoryPosts.length !== 0 ?
					categoryPosts.map(p =>
						<Post
							key={p.id}
							id={p.id}
							timestamp={p.timestamp}
							title={p.title}
							body={p.body}
							author={p.author}
							voteScore={p.voteScore}
							commentCount={p.commentCount}
						/>
					)
				: <p>No posts</p>
			}
			</div>
		);
	}
}

function mapStateToProps ({ posts }) {
  return {
		posts: posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchCategoryPosts: (data) => dispatch(fetchCategoryPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel)
