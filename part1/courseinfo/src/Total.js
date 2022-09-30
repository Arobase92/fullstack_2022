import React from 'react';

const Total = ({parts}) => {
	const [part1, part2, part3] = parts
	const total = part1.exercises + part2.exercises + part3.exercises
	return (
		<div>
			<p> Number of exercises {total} </p>
		</div>
	);
};

export default Total;