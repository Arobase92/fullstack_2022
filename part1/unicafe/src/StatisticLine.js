import React from 'react';

const Statistics = ({text, per, value}) => {
	return (
		<div>
			{text}: {value} {per}
		</div>
	);
};

export default Statistics;