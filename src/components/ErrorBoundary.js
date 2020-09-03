import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	
	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	} // see if error is made in ErrorBoundary's children
	
	render() {
		if (this.state.hasError) {
			return <h1>Ooops. That is not good</h1>;
		}
		return this.props.children; // In this case, it's the CardList
	}
}

export default ErrorBoundary;