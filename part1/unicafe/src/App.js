import React, { useState } from 'react'
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const handleGoodClick = () =>{
		setGood(good + 1);
	}

	const handleBadClick = () =>{
		setBad(bad + 1);
	}

	const handleNeutralClick = () =>{
		setNeutral(neutral + 1);
	}

	return (
		<div>
			<h1>Give feedback</h1>
			<button onClick={handleGoodClick}>good</button>
			<button onClick={handleNeutralClick}>neutral</button>
			<button onClick={handleBadClick}>bad</button>
			<h1>statistics</h1>
			<Statistics text='good' value={good}/>
			<Statistics text='neutral' value={neutral}/>
			<Statistics text='bad' value={bad}/>
		</div>
	)
}

export default App