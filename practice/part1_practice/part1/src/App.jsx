const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}


const App = () => {
  const friends = [ 'Peter', 'Maya' ]

  return (
    <div>
      {friends}
    </div>
  )
}

export default App