import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

const App = ({feedback}) => {
  // save clicks of each button to its own state
  console.log('ran')
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Title = ({title}) => {
    return (
      <h1>{title}</h1>
    )
  }

  const DisplayFeedback = ({text , value}) => {
    return(
      <div>{text} {value}</div>
    )
  }

   const handleGoodEvent = () => {
    setGood(good + 1)
    feedback.push('G')
    console.log(feedback)
  }

  const HandleNetrulEvent = () => {
    setNeutral(neutral + 1)
    feedback.push('N')
  }

  const HandleBadEvent = () => {
    setBad(bad + 1)
    feedback.push('B')
  }

  const Statistics = () => {
  if (feedback.length > 0)
  {
    return (
      <div>
      <DisplayFeedback text = 'Good' value = {good}/>
      <DisplayFeedback text = 'Neutral' value = {neutral}/>
      <DisplayFeedback text = 'Bad' value = {bad}/>
      <DisplayFeedback text = 'all' value = {good + bad + neutral}/>
      <DisplayFeedback text = 'Average' value = {(good + bad + neutral) / 3}/>
      </div>
    )
  }
  else
  return(
    <div>No Statistics Available</div>
  )
  }
    
  
  return (
    <div>
      <Title title= 'Give Feedback'/>
      <button onClick = {handleGoodEvent}>Good</button>
      <button onClick = {HandleNetrulEvent}>Neutral</button>
      <button onClick = {HandleBadEvent}>Bad</button>
      <Title title= 'Statistics'/>
      <Statistics />
    </div>
  )
}

export default App

