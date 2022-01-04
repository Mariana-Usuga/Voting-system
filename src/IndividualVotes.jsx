import { useStateVotes } from './context/VotesContext'

import './App.css'

const IndividualVotes = () => {
  const { votesCandidate1, votesCandidate2, votesCandidate3,
    votesCandidate4, showCandidate, showPercentage, totalVotes } = useStateVotes()

    const showVotesPercentage = (votes) => {
      return `${Math.round((votes/totalVotes*100))}%`
    }

  return(
    <>
    <h2 className='individualVotes'>Votos individuales</h2>
    <div className={showCandidate === 'showCandidate1' ? 'candidates'
    : showCandidate === 'todos' ? 'candidates' : 'candidates-hide' }>
      <span>C1: { showPercentage ? showVotesPercentage(votesCandidate1)
      : votesCandidate1 }</span>
    </div>
    <div className={showCandidate === 'showCandidate2' ? 'candidates'
    : showCandidate === 'todos' ? 'candidates' : 'candidates-hide'}>
      <span>C2: {showPercentage ? showVotesPercentage(votesCandidate2)
      : votesCandidate2}</span>
    </div>
    <div className={showCandidate === 'showCandidate3' ? 'candidates'
    : showCandidate === 'todos' ? 'candidates' : 'candidates-hide'}>
      <span>C3: {showPercentage ? showVotesPercentage(votesCandidate3)
      : votesCandidate3}</span>
    </div>
    <div className={showCandidate === 'showCandidate4' ? 'candidates'
    : showCandidate === 'todos' ? 'candidates' : 'candidates-hide'}>
      <span>C4: {showPercentage ? showVotesPercentage(votesCandidate4)
      : votesCandidate4}</span>
    </div>
    </>
  )
}

export default  IndividualVotes