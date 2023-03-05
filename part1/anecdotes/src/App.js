import { useState } from 'react'

let highestVote = 0

const App = ({ }) => {
  let [selected, setSelected] = useState(0)
  let [annecdotes, setAnecdotes] = useState([
    { ancedote: 'If it hurts, do it more often.', votes: 0 },
    { ancedote: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { ancedote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { ancedote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { ancedote: 'Premature optimization is the root of all evil.', votes: 0 },
    { ancedote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { ancedote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 }
  ])
  let [highestState, setHighest] = useState(0)

  const DisplayCurrentAnecdote = () => {
    return (
      <div>
        <p>{annecdotes[selected].ancedote}</p>
        <p>Has {annecdotes[selected].votes} votes</p>

        <button onClick={handleStateChange}>Next Ancedote</button>
        <button onClick={() => HandleVoteState(selected)}>Vote For Ancedote</button>
      </div>
    )
  }

  const DisplayHighestVoteAnnecdote = () => {
    if (highestVote > 0) {
      return (
        <div>
          <h2>Annecedote with most votes</h2>
          <p>{highestState.ancedote} has {highestState.votes} votes</p>
        </div>
      )
    }
    else
      return (
        <div><h2>Currently no votes</h2></div>
      )

  }

  const LargestVotes = () => {

    annecdotes.forEach(element => {
      if (element.votes > highestVote) {
        highestVote = element.votes

        highestState = element
        setHighest(highestState)
      }

    });
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleStateChange = () => {
    let newAnnecdotes = annecdotes
    let randomNumber = getRandomInt(newAnnecdotes.length)

    selected = randomNumber
    setSelected(selected);

  }

  const HandleVoteState = (index) => {
    let newAnnecdotes = [...annecdotes]
    newAnnecdotes[index].votes += 1

    setAnecdotes(newAnnecdotes)
    LargestVotes()

  }


  return (
    <div>
      <DisplayCurrentAnecdote />
      <DisplayHighestVoteAnnecdote />
    </div>
  )
}

export default App