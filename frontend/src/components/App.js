//React
import React from 'react';
//Router
import { Route, Switch } from 'react-router-dom';
//Components
import './App.css';
import Header from './Header';
import Home from './Home';
import Categories from './Categories';
import Category from './Category';
import NotFound from './NotFound';

const App = (props) => {
	return (
		<div>
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<h1>Readable</h1>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/categories/" component={Categories} />
					<Route path="/category/:category" component={Category} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
