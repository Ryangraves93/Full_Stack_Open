import { useState } from 'react'

let bhasSearched = false;

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Dan Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  let [filteredPersons, setFilteredPersons] = useState([])


  const addName = (name, number) => {
    let newPerson = {
      name,
      number
    }

    if (!hasOccurances(newPerson, persons)) {
      setPersons(persons.concat(newPerson))
      bhasSearched = false
    }
    else {
      window.alert(newPerson.name + " is already in the phonebook")
    }
  }

  const addFilteredName = (name) => {
    let filterNames = persons.filter((persons) => {
      return persons.name.toLowerCase().includes(name);
    })

    if (name = "") {
      bhasSearched = false
      console.log(persons)
    }
    else {
      bhasSearched = true
      filteredPersons.length = 0
      setFilteredPersons(filteredPersons.concat(filterNames))
    }

  }

  const PhonebookList = ({ filter }) => {
    console.log("Read from here" + filter)
    if (!filter) {
      return (
        <div>
          <h2>Numbers</h2>
          {persons.map(names => {
            return (<div key={names.name}>{names.name} {names.number} </div>)
          })}
        </div>
      )
    }
    else {
      return (
        <div>
          <h2>Numbers</h2>
          {filteredPersons.map(filteredPersons => {
            return (<div key={filteredPersons.name}>{filteredPersons.name} {filteredPersons.number} </div>)
          })}
        </div>
      )
    }

  }

  //Long story short, comparing is a bitch. Make sure to comapre raw values as
  //comparing arrays or objects seems to compare memory location and not the
  //values 
  const hasOccurances = (addedObject, objectArr) => {

    let objectArrValues = Object.values(objectArr)

    for (let i = 0; i < objectArrValues.length; i++) {
      if (objectArrValues[i].name === addedObject.name) {
        return true;
      }
    }
    return false
  }

  return (
    <div>
      <FilterInputField addFilteredName={addFilteredName} />
      <NumberInputForm addName={addName} />
      <PhonebookList filter={bhasSearched} />
    </div>
  )
}

export default App

// Components

const FilterInputField = ({ addFilteredName }) => {
  let [filterTerm, setFilterTerm] = useState('')

  const handleFilter = e => {

    setFilterTerm(e.target.value)
    addFilteredName(e.target.value)
  }

  return (
    <div>
      <h2>Filter </h2>
      <p>filter shown with</p>
      {<input type="text"
        id="filterTerm"
        value={filterTerm.filterTerm}
        onChange={handleFilter}></input>}
    </div>
  )
}


const NumberInputForm = ({ addName, addFilteredName }) => {
  let [newName, setNewName] = useState('')
  let [newNumber, setNewNumber] = useState('')

  //Helper Functions
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addName(newName, newNumber)
  }


  return (
    <div>

      <div>
        <h2>Add a number</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text"
            id="name"
            value={newName}
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div>
          Number:
          <input type="text"
            id="number"
            onChange={handleNumberChange}
            value={newNumber}
          />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    </div>
  )
}