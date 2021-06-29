import React, { useState } from 'react'

const StatisticLine = (props) => {
  return(
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
  )
}

const AverageStats = ({good, bad, all}) => {
  const average = ((good *1) + (bad *-1)) /all
  
  return(
    <tr>
      <td>average</td>
      <td>{average}</td>
    </tr>
  )
}

const PositiveStats = ({good, all}) => {
  const positive = (good)/all
  
  return(
    <tr>
      <td>positive</td>
      <td>{positive *100}%</td>
    </tr>)
}

const Statistics = ({good, neutral, bad}) => {
  const allFeedback = good + neutral + bad

  if(allFeedback === 0){
    return <p>No feedback given</p>
  }

  return(
    <table>
      <tbody>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={allFeedback}/>
      <AverageStats  good={good} bad={bad} all={allFeedback}/>
      <PositiveStats good={good} all={allFeedback}/>
      </tbody>
    </table>
  )
} 
const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)}
 
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <Button text="good" handleClick={() => setGood(good +1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral +1)}/>
      <Button text="bad" handleClick={() => setBad(bad +1)}/>
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App 