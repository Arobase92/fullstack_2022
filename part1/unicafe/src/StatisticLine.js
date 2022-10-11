import React from 'react';

const Statistics = ({text, per, value}) => {
	return (
		<table>
			<tbody>
				<tr>
					<td>{text}</td>
					<td>{value}</td>
					<td>{per}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Statistics;