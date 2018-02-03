//React
import React from 'react';
//Redux
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';
//Router
import { Route, Switch, Link } from 'react-router-dom';
//Components
import './App.css';
import Home from './Home';
import NotFound from './NotFound';

const App = (props) => {
	const { categories, fetchPosts } = props;
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<h1 onClick={() => fetchPosts()}>Readable</h1>
				</div>
			</div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
	);
}

function mapStateToProps ({ posts }) {
  return {
		categories: [
			{
				category: 'React',
				posts: posts.react
			},{
				category: 'Redux',
				posts: posts.redux
			},{
				category: 'Udacity',
				posts: posts.udacity
			}
		]
  }
}

function mapDispatchToProps (dispatch) {
  return {
		fetchPosts: (data) => dispatch(fetchPosts(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
