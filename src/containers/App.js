import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots'; // {} destructure since not a default export
import './App.css';
import Scroll from '../components/Scroll';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../action.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.loadRobots.robots,
		isPending: state.loadRobots.isPending,
		error: state.loadRobots.error
	} // state.reducerName.propsName
}; // from redux state, so that the property you want can be used as props

const mapDispatchToProps = (dispatch) => { 
	// To change a redux state, we send actions to the redux dispatch function. 
	// The mapDispatchToProps helps create a function that dispatches the action in its body 
	// so that the function can be added to the component props.
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // after the dispatch call reducer function is run to create a new state, 
	// if there is a logic made for that action
		onRequestRobots: () => dispatch(requestRobots()) 
	// redux-thunk passes dispatch to requestRobots() in this syntax
	}
};  // the functions (that change the state) can be used as props

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		}); 
		
		if (isPending) {
			return <h1 className='tc'>Loading</h1>;
		}
		else {
			return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary> 
						<CardList robots={filteredRobots}/> {/* {} used to assign property:value for JSX */}
					</ErrorBoundary>
				</Scroll>
			</div>
			);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 
// What states and actions (defined in these two functions) should App listen to