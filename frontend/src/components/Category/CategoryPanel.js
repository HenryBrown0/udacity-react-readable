//React
import React from 'react';
//Redux
import { connect } from 'react-redux';
//components
import '../App.css';
import Post from '../Post/Post';

//Content
const CategoryPanel = (props) => {
	const { category, posts } = props;
	const categoryPosts = posts[category] ? posts[category].length !== 0
		? posts[category].filter(p => p.category === category)
		: [] : []
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

function mapStateToProps ({ posts }) {
  return {
		posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel)
