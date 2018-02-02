import React from 'react';
import './App.css';
//components
import Post from './Post';

const App = (props) => {
	const post1 = {
		id: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1467166872634,
		title: 'Udacity is the best place to learn React',
		body: 'Everyone says so after all.',
		author: 'thingtwo',
		category: 'react',
		voteScore: 6,
		deleted: false,
		commentCount: 2
	}
	const post2 = {
		id: '6ni6ok3ym7mf1p33lnez',
		timestamp: 1468479767190,
		title: 'Learn Redux in 10 minutes!',
		body: 'Just kidding. It takes more than 10 minutes to learn technology.',
		author: 'thingone',
		category: 'redux',
		voteScore: -5,
		deleted: false,
		commentCount: 0
	}
	return (
		<div className="container">
			<div class="row">
				<div class="col-sm-12">
					<h1>Readable</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-6 col-lg-4">
					<h2>
						React
						<small>View categorie individually</small>
					</h2>
					{/* React categorie */}
					<Post
						timestamp={post1.timestamp}
						title={post1.title}
						body={post1.body}
						author={post1.author}
						voteScore={post1.voteScore}
						commentCount={post1.commentCount}
					/>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-4">
					<h2>
						Redux
						<small>View categorie individually</small>
					</h2>
					{/* Redux categorie */}
					<Post
						timestamp={post2.timestamp}
						title={post2.title}
						body={post2.body}
						author={post2.author}
						voteScore={post2.voteScore}
						commentCount={post2.commentCount}
					/>
				</div>
				<div class="col-sm-12 col-md-6 col-lg-4">
					<h2>
						Udacity
						<small>View categorie individually</small>
					</h2>
					{/* Udacity categorie */}
				</div>
			</div>
		</div>
	);
}

export default App;
