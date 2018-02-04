//React
import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
//components
import '../App.css';
import Post from '../Post/Post';

//Content
class CategoryPanel extends Component {
	componentDidMount(){
		this.props.fetchPost(this.props.postID);
	}
	render(){
		const { category, postID, posts } = this.props;
		const p = posts[category] ? posts[category].filter(p => p.id === postID)[0] : null;
		return (
			<div>
			{
				p ?
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
		fetchPost: (data) => dispatch(fetchPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPanel)
