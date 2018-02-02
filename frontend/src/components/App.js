import React from 'react';
import { connect } from 'react-redux'
import './App.css';
//components
import Post from './Post';

const App = (props) => {
	const { react, redux, udacity } = props;
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1>Readable</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-4">
					<h2>
						React
						<small>View categorie individually</small>
					</h2>
					{/* React categorie */}
					{
						react ?
							react.map(p =>
								<Post
									key={p.id}
									timestamp={p.timestamp}
									title={p.title}
									body={p.body}
									author={p.author}
									voteScore={p.voteScore}
									commentCount={p.commentCount}
								/>
							)
						: <p>No posts</p>
					}
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<h2>
						Redux
						<small>View categorie individually</small>
					</h2>
					{/* Redux categorie */}
					{
						redux ?
							redux.map(p =>
								<Post
									key={p.id}
									timestamp={p.timestamp}
									title={p.title}
									body={p.body}
									author={p.author}
									voteScore={p.voteScore}
									commentCount={p.commentCount}
								/>
							)
						: <p>No posts</p>
					}
				</div>
				<div className="col-sm-12 col-md-6 col-lg-4">
					<h2>
						Udacity
						<small>View categorie individually</small>
					</h2>
					{/* Udacity categorie */}
					{
						udacity ?
							udacity.map(p =>
								<Post
									key={p.id}
									timestamp={p.timestamp}
									title={p.title}
									body={p.body}
									author={p.author}
									voteScore={p.voteScore}
									commentCount={p.commentCount}
								/>
							)
						: <p>No posts</p>
					}
				</div>
			</div>
		</div>
	);
}

function mapStateToProps ({ post }) {
  return {
		react: post.react,
		redux: post.redux,
		udacity: post.udacity
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
