import React from 'react';
import './App.css';
//components
import Post from './Post/Post';

const CategoryPanel = (props) => {
	const { category, posts } = props;
	return (
		<div>
		{
			posts ? posts.length !== 0 ?
				posts.map(p =>
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
			: <p>No posts</p> : <p>No posts</p>
		}
		</div>
	);
}

export default CategoryPanel;
