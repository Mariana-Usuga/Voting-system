import { useAppDispatch } from './context/VotesContext'
import { PERCENTAGE, NOT_PERCENTAGE } from './context/Constants'

import './App.css'
 
const Input = ({ results }) => {
  const dispatch = useAppDispatch()

  const howShow = () => {
    if(results === 'Ver votos porcentuales'){
      dispatch({ type: PERCENTAGE })
    }else if(results === 'Ver votos numericos'){
      dispatch({ type: NOT_PERCENTAGE })
    }
  }

  return(
    <div>
      <input type="radio" name='showResult' onClick={howShow}/>
      <label className='label'>{results}</label>
    </div>
    )
}

export default Input