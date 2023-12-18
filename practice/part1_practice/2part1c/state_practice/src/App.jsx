import { useState } from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <h2>
        Hello
      </h2>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const Timer = () => {
  const [timer, setTimer] = useState(0)
  
  setTimeout(() => {
    setTimer(timer + 1)
  }, 1000)
  
  return (
    <div>
      <h2>
        Timer
      </h2>
      {timer}
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  
  return (
    <div>
      <h2>
        Counter
      </h2>
      <p>
        {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button onClick={() => setCounter(0)}>
        0
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  )
}

const ClickRace = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      <h2>
        Click Race
      </h2>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>
        {allClicks.join(' ')}
      </p>
      <p>
        Total clicks: {total}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <h1>
        Greetings
      </h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Timer />
      <Counter />
      <ClickRace />
    </div>
  )
}

export default App