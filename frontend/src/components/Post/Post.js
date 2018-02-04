//React
import React from 'react';
import PropTypes from 'prop-types';
//Components
import '../App.css';
import Basic from './Basic';
import Comments from './Comments';

const Post = (props) => {
	const { post } = props;
	return (
		<div>
			{ post ?
			<div>
				<Basic post={post}/>
				<Comments postID={post.id} postCategory={post.category} />
			</div>
			 : null }
		</div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
