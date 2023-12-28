import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPersonObject = {
      name: newName.trim(),
    }
    const matchingName = persons.reduce(
      (accumulator, currentValue) => {
        // console.log(newPersonObject.name === currentValue.name)
        return accumulator || newPersonObject.name.toLowerCase() === currentValue.name.toLowerCase()
      }, 0
    )
    !matchingName 
    ? setPersons(persons.concat(newPersonObject))
    : window.alert('NO')
    setNewName('')
  }

  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <form >
        <div>
          name: <input autoComplete='off' name='name' value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type='submit' onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>
        Numbers
      </h2>
      <ul>
        {persons.map(p => <li key={p.name}>{p.name}</li>)}
      </ul>
    </div>
  )
}

export default App
