//React
import React from 'react';
import PropTypes from 'prop-types';
//Router
import { Link } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { deletePost, votePost } from '../../actions/posts';
//Components
import '../App.css';
import EditPost from './EditPost';
import { MdArrowDropDown, MdArrowDropUp, MdDelete, MdEdit }
	from 'react-icons/lib/md';
//Content
const Basic = (props) => {
	const { post } = props;
	const date = post ? new Date(post.timestamp).toDateString() : null;

	function deletePost() {
		props.deletePost(post)
	}

	function voteUp() {
		props.votePost({post, type: "upVote"})
	}

	function voteDown() {
		props.votePost({post, type: "downVote"})
	}

	return (
		<div className="card fluid">
			<div className="section left">
				<h3>
					{post.title}
					<small>- {post.author}</small>
				</h3>
				<p>{post.body}</p>
			</div>
			<div className="container section">
				<div className="row">
					<div className="col-sm-3">
						<MdArrowDropUp
							height="2em"
							width="2em"
							onClick={voteUp}
							className="btn green"
						/>
						{post.voteScore}
						<MdArrowDropDown
							height="2em"
							width="2em"
							onClick={voteDown}
							className="btn red"
						/>
					</div>
					<div className="col-sm-3">
						<Link to={`../../${post.category}/${post.id}`}>
					{
						post.commentCount === 1
						? `${post.commentCount} comment`
						: `${post.commentCount} comments`
					}
						</Link>
					</div>
					<div className="col-sm-3">{date}</div>
					<div className="col-sm-3">
						<MdDelete onClick={deletePost} className="btn delete red" />

						<label htmlFor={`editPost${post.id}`}>
							<MdEdit className="btn edit yellow" />
						</label>

						<input id={`editPost${post.id}`} type="checkbox"/>
						<div className="modal">
						  <div className="card fluid">
						    <label htmlFor={`editPost${post.id}`} className="close"></label>
								<EditPost p={post} />
						  </div>
						</div>

					</div>
				</div>
			</div>
		</div>
  );
}



function mapStateToProps ({ comments }) {
  return {
		comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
		deletePost: (data) => dispatch(deletePost(data)),
		votePost: (data) => dispatch(votePost(data))
  }
}

Basic.propTypes = {
  post: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basic)
