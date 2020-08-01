import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
	<div className='pa2'>
		<input 
		className = 'pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots'
		onChange = {searchChange}// 1. when something is typed, call searchChange function
		/>
	</div>
	);
}
			
export default SearchBox;