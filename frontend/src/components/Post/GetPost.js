//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
//components
import '../App.css';
import Post from '../Post/Post';

//Content
class CategoryPanel extends Component {
	componentDidMount(){
		this.props.fetchPosts(this.props.postID);
	}
	render(){
		const { postID } = this.props;
		const p = posts[category] ? posts[category]['posts'] : [];
		return (
			<div>
			{
				post ?
					<Post
						key={postID}
						id={postID}
						timestamp={p.timestamp}
						title={p.title}
						body={p.body}
						author={p.author}
						voteScore={p.voteScore}
						commentCount={p.commentCount}
					/>
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
		fetchPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel)
