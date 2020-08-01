import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
	<div> 
	{
		robots.map((user, i) => {
			return (
				<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} 
				/>
			);
		})
	} {/* When including javascript component, wrap it around with curly bracket*/}
	</div>
	);
}

export default CardList;

// key prop should have something that doesn't change. For example, index could change if array items
// get moved. So a better key in this case would be something unique like id.