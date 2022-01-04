import './App.css';
import { useAppDispatch } from './context/VotesContext'
import Candidates from './Candidates';
import TotalVotes from './TotalVotes';
import Filter from './Filter';
import IndividualVotes from './IndividualVotes';
import { TODOS } from './context/Constants'

function App() {
  const dispatch = useAppDispatch()

  const showAllResults = () => {
    dispatch({ type:TODOS })
  }

  return (
    <>
    <div className='container1'>
      <Candidates name="Candidato 1"/>
      <Candidates name="Candidato 2"/>
      <Candidates name="Candidato 3"/>
      <Candidates name="Candidato 4"/>
    </div>
    <button type='button' className='showAllVotes'
    onClick={showAllResults}>Ver votos de todos los Candidatos</button>
    <div className='container2'>
      <Filter/>
      <TotalVotes />
    </div>
    <IndividualVotes />
    </>
  );
}

export default App;
