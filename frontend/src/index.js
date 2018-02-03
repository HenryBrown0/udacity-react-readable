//React
import React from 'react';
import ReactDOM from 'react-dom';
//Service worker
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Provider } from 'react-redux';
//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import App from './components/App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
	 <Router>
		 <Route path="/" component={App} />
	 </Router>
 </Provider>
	, document.getElementById('root'));
registerServiceWorker();
