import { useAppDispatch } from './context/VotesContext'
import { INCREMENT, INCREMENT_CANDIDATE_1, INCREMENT_CANDIDATE_2, 
         INCREMENT_CANDIDATE_3, INCREMENT_CANDIDATE_4 } from './context/Constants'
import { SHOW_CANDIDATE_1, SHOW_CANDIDATE_2, 
         SHOW_CANDIDATE_3, SHOW_CANDIDATE_4 } from './context/Constants'

import './App.css'

const Candidates = ({ name }) => {
  const dispatch = useAppDispatch()

  const addVotes = (e) => { 
    e.preventDefault()
    if(name === 'Candidato 1'){
      dispatch({ type: INCREMENT_CANDIDATE_1 })
    }else if(name === 'Candidato 2'){
      dispatch({ type: INCREMENT_CANDIDATE_2 })
    }else if(name === 'Candidato 3'){
      dispatch({ type: INCREMENT_CANDIDATE_3 })
    }else{
      dispatch({ type: INCREMENT_CANDIDATE_4 })
    }
    dispatch({ type: INCREMENT })
  }

  const showResult = () => {
    if(name === 'Candidato 1'){
      dispatch({ type: SHOW_CANDIDATE_1 })
    }else if(name === 'Candidato 2'){
      dispatch({ type: SHOW_CANDIDATE_2 })
    }else if(name === 'Candidato 3'){
      dispatch({ type: SHOW_CANDIDATE_3 })
    }else if(name === 'Candidato 4'){
      dispatch({ type: SHOW_CANDIDATE_4 })
    }
    }
    
    return(
      <div>
        <h2>{name}</h2>
          <button type="button" className="btnVote"
           onClick={addVotes}>Votar</button>
          <button type='button' className='showVote'
          onClick={showResult}>Ver votos de {name}</button>
      </div>
    )
}

export default Candidates