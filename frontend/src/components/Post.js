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
				<div class="row">
					<div class="col-sm-4">{voteScore}</div>
					<div class="col-sm-4">
					{
						commentCount === 1
						? `${commentCount} comment`
						: `${commentCount} comments`
					}
					</div>
					<div class="col-sm-4">{timestamp}</div>
				</div>
			</div>
		</div>
  );
}

export default Post;
