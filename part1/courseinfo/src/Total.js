import React from 'react';

const Total = ({part1, part2, part3}) => {
	const total = part1.exercises + part2.exercises + part3.exercises
	return (
		<div>
			<p> Number of exercises {total} </p>
		</div>
	);
};

export default Total;