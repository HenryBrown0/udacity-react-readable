import React from 'react';
import '../App.css';
import Basic from './Basic';

const Post = (props) => {
	const { id, title, body, author, voteScore, commentCount } = props;
	const date = new Date(props.timestamp).toDateString();
	return (
		<div>
			<label htmlFor={id}>
				<Basic
					date={date}
					title={title}
					body={body}
					author={author}
					voteScore={voteScore}
				 	commentCount={commentCount}
				/>
			</label>
			<input id={id} type="checkbox"/>
			<div className="modal">
			  <div className="card fluid">
			    <label htmlFor={id} className="close"></label>
					<Basic
						date={date}
						title={title}
						body={body}
						author={author}
						voteScore={voteScore}
					 	commentCount={commentCount}
					/>
			  </div>
			</div>
		</div>
  );
}

export default Post;
