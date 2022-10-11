import React, { useState } from 'react'
import StatisticLine from "./StatisticLine";
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
				<Button text='good' onClick={handleGoodClick}/>
				<Button text='neutral' onClick={handleNeutralClick}/>
				<Button text='bad' onClick={handleBadClick}/>
				<h1>statistics</h1>
				<p>no feedback given</p>
			</div>
		)
	}

	return (
		<div>
			<h1>Give feedback</h1>
			<Button text='good' onClick={handleGoodClick}/>
			<Button text='neutral' onClick={handleNeutralClick}/>
			<Button text='bad' onClick={handleBadClick}/>
			<h1>statistics</h1>
			<StatisticLine text='good' value={good} per=''/>
			<StatisticLine text='neutral' value={neutral} per=''/>
			<StatisticLine text='bad' value={bad} per=''/>
			<StatisticLine text='all' value={allFeedback} per=''/>
			<StatisticLine text='average' value={average} per=''/>
			<StatisticLine text='positive' value={positive} per='%'/>
		</div>
	)
}

export default App