import { useStateVotes } from './context/VotesContext'

const TotalVotes = () => {
  const { totalVotes } = useStateVotes()
  return(
    <div>
      <h2>Votos Totales</h2>
      <h3>{totalVotes}</h3>
    </div>
    )
}

export default TotalVotes