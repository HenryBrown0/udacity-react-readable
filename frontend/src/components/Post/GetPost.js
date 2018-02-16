//React
import React from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
//components
import '../App.css';
import Post from '../Post/Post';
//Content
const CategoryPanel = (props) => {
	this.props.fetchPost(this.props.postID);
	const { category, postID, posts } = this.props;
	const p = posts[category] ? posts[category].filter(p => p.id === postID)[0] : null;
	return (
		<div>
		{
			p ?
				<Post post={p} />
			: <p>No posts</p>
		}
		</div>
	);
}
function mapStateToProps ({ posts }) {
  return {
		posts: posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchPost: (data) => dispatch(fetchPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel)
