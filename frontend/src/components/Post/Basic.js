//React
import React from 'react';
import PropTypes from 'prop-types';
//Router
import { Link } from 'react-router-dom';
//Components
import '../App.css';
import { MdArrowDropDown, MdArrowDropUp, MdDelete, MdEdit } from 'react-icons/lib/md';

const Basic = (props) => {
	const { post } = props;
	const date = post ? new Date(post.timestamp).toDateString() : null;
	return (
		<div>
		{ post ?
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
							<MdArrowDropUp height="2em" width="2em" className="btn green" />
							{post.voteScore}
							<MdArrowDropDown height="2em" width="2em" className="btn red" />
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
							<MdDelete height="1em" width="1em" className="btn delete red" />
							<MdEdit height="1em" width="1em" className="btn edit yellow" />
						</div>
					</div>
				</div>
			</div>
		: null }
		</div>
  );
}

Basic.propTypes = {
  post: PropTypes.object,
};

export default Basic;
