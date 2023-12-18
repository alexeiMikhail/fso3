import { useState } from 'react'

const Feedback = ({ feedback }) => {
  const { good, bad, neutral, setGood, setBad, setNeutral} = feedback
  return (
    <div>
      <h2>
        give feedback
      </h2>
      <Button text='good' clickHandler={() => setGood(good + 1)} />
      <Button text='neutral' clickHandler={() => setNeutral(neutral + 1)} />
      <Button text='bad' clickHandler={() => setBad(bad + 1)} />
    </div>
  )
}

const StatisticLine = ({ text, number }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {number}
      </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (!total) {
    return (
      <div>
        <h2>
          statistics
        </h2>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  
  return (
    <div>
      <h2>
        statistics
      </h2>
      <table>
        <tbody>
          <StatisticLine text='good' number={good} />
          <StatisticLine text='neutral' number={neutral} />
          <StatisticLine text='bad' number={bad} />
          <StatisticLine text='average' number={(good - bad) / total} />
          <StatisticLine text='positive' number={good / total * 100 + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ text, clickHandler }) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = {
    good: good,
    setGood: setGood,
    neutral: neutral,
    setNeutral: setNeutral,
    bad: bad,
    setBad: setBad,
  }

  return (
   <div>
      <Feedback feedback={feedback} />
      <Statistics good={good} neutral={neutral} bad={bad} />
   </div>
  )
}

export default App
