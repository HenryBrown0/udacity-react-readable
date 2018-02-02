import React from 'react';
import './App.css';

const Post = (props) => {
	const { timestamp, title, body, author, voteScore, commentCount } = props;
	return (
		<div className="card fluid">
			<div className="section left">
				<h3>
					{title}
					<small>- {author}</small>
				</h3>
				<p>{body}</p>
			</div>
			<div className="container section">
				<div className="row">
					<div className="col-sm-4">{voteScore}</div>
					<div className="col-sm-4">
					{
						commentCount === 1
						? `${commentCount} comment`
						: `${commentCount} comments`
					}
					</div>
					<div className="col-sm-4">{timestamp}</div>
				</div>
			</div>
		</div>
  );
}

export default Post;
