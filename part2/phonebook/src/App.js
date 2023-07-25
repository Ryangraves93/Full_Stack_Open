import { useEffect, useState } from 'react'
import phonebookService from './service/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searched, setSearched] = useState(false)

  useEffect(() => {
    phonebookService.getAll().then(intialEntries => {
      setPersons(intialEntries)
    })
  }, [])

  const addName = (name, number) => {
    const newPerson = { name, number }


    if (!persons.some(person => person.name === newPerson.name)) {
      phonebookService.update(newPerson).then(updateEntry => {
        setPersons(persons.concat(updateEntry))
      })
    }
    else {
      //window.alert(`${newPerson.name} is already in the phonebook`)
      persons.map(person => {
        if (person.name === name) {
          console.log("Person")
          console.log(person)
          if (window.confirm(`${newPerson.name} is already in the phonebook`)) {
            phonebookService.updateEntry(newPerson, person.id).then(updatedEntry => {
              const newData = updatedEntry.data
              const newEntries = persons.concat(newData)
            }).then(
              setPersons(newEntries)
            )
          }
        }
      })
    }
  }

  const handleDeleteButton = (name, id) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      phonebookService.removeObject(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const handleSearch = e => {
    setSearchTerm(e.target.value)
    setSearched(true)
  }

  const filterPersons = () => {
    const search = searchTerm.trim().toLowerCase()
    return persons.filter(person => person.name.toLowerCase().includes(search))
  }

  const PhonebookList = () => {
    const entries = searched ? filterPersons() : persons
    return (
      <div>
        <h2>Numbers</h2>
        {entries.map(person => (
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDeleteButton(person.name, person.id)}>Delete Entry</button>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div>
        <h2>Filter</h2>
        <p>Filter shown with:</p>
        <input type="text" id="searchTerm" value={searchTerm} onChange={handleSearch} />
      </div>
      <div>
        <h2>Add a number</h2>
        <NumberInputForm addName={addName} />
      </div>
      <div>
        <PhonebookList />
      </div>
    </div>
  )
}

const NumberInputForm = ({ addName }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleNameChange = e => setName(e.target.value)
  const handleNumberChange = e => setNumber(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    addName(name, number)
    setName('')
    setNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        Number:
        <input type="text" id="number" value={number} onChange={handleNumberChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default App
