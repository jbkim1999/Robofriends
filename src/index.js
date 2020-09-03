import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import 'tachyons';

import { Provider } from 'react-redux'; 
// connect: which component wants to know that redux library exists
import { searchRobots, loadRobots } from './reducers.js'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; // redux middleware
import thunkMiddleware from 'redux-thunk'; // redux middleware

const logger = createLogger(); // redux middleware
const rootReducer = combineReducers({ searchRobots, loadRobots });
// combine all reducers to create rootReducer
const store = 
	  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 

ReactDOM.render(
	<Provider store={store}> {/* making sure store is passing down on components */}
		<App/>
	</Provider>,
 	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

