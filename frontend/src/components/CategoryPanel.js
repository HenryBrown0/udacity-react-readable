import React from 'react';
import './App.css';
//components
import Post from './Post/Post';

const CategoryPanel = (props) => {
	const { category, posts } = props;
	return (
		<div className="col-sm-12 col-md-6 col-lg-4">
			<h2>
				{category}
				<small>View categorie individually</small>
			</h2>
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
