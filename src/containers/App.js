import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots'; // {} destructure since not a default export
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super(); // since extending from Component
		this.state = {
			robots: [],
			searchfield: '',
		};
	};
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}
	
	onSearchChange = (event) => { // 2. SearchBox --> App
		this.setState({ searchfield: event.target.value}); // method of changing state
	};
	
	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		}); // 3. App --> robots --> App
		
		if (!robots.length) {
			return <h1 className='tc'>Loading</h1>;
		}
		else {
			return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/> {/* {} used to assign property:value for JSX */}
				</Scroll>
			</div> // 4. App --> CardList
			);
		}
	};
}

export default App;