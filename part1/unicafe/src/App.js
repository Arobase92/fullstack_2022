import React, { useState } from 'react'
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {

	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const allFeedback =  good + neutral + bad
	const average = allFeedback > 0? (good - bad) / allFeedback : allFeedback
	const positive = allFeedback > 0? (good * 100) / allFeedback : allFeedback
	const handleGoodClick = () =>{
		setGood(good + 1);
	}

	const handleBadClick = () =>{
		setBad(bad + 1);
	}

	const handleNeutralClick = () =>{
		setNeutral(neutral + 1);
	}

	if (allFeedback === 0){
		return (
			<div>
				<h1>Give feedback</h1>
				<button onClick={handleGoodClick}>good</button>
				<button onClick={handleNeutralClick}>neutral</button>
				<button onClick={handleBadClick}>bad</button>
				<h1>statistics</h1>
				<p>no feedback given</p>
			</div>
		)
	}

	return (
		<div>
			<h1>Give feedback</h1>
			<button onClick={handleGoodClick}>good</button>
			<button onClick={handleNeutralClick}>neutral</button>
			<button onClick={handleBadClick}>bad</button>
			<h1>statistics</h1>
			<Statistics text='good' value={good} per=''/>
			<Statistics text='neutral' value={neutral} per=''/>
			<Statistics text='bad' value={bad} per=''/>
			<Statistics text='all' value={allFeedback} per=''/>
			<Statistics text='average' value={average} per=''/>
			<Statistics text='positive' value={positive} per='%'/>
		</div>
	)
}

export default App