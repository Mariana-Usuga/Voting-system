import { INCREMENT, INCREMENT_CANDIDATE_1, INCREMENT_CANDIDATE_2,
    INCREMENT_CANDIDATE_3, INCREMENT_CANDIDATE_4,
    SHOW_CANDIDATE_1, SHOW_CANDIDATE_2, SHOW_CANDIDATE_3, SHOW_CANDIDATE_4,
TODOS, PERCENTAGE, NOT_PERCENTAGE } from './Constants'

function Reducer(state, action) {
    switch (action.type){
      case INCREMENT:
        return{
          ...state,
          totalVotes: state.totalVotes + 1,
        };
      case INCREMENT_CANDIDATE_1:
        return{
          ...state,
          votesCandidate1: state.votesCandidate1 + 1
        };
      case INCREMENT_CANDIDATE_2:
        return{
          ...state,
          votesCandidate2: state.votesCandidate2 + 1
        };
      case INCREMENT_CANDIDATE_3:
        return{
          ...state,
          votesCandidate3: state.votesCandidate3 + 1
        };
      case INCREMENT_CANDIDATE_4:
        return{
          ...state,
          votesCandidate4: state.votesCandidate4 + 1
        };
      case SHOW_CANDIDATE_1:
        return{
          ...state,
          showCandidate: 'showCandidate1'
        };
      case SHOW_CANDIDATE_2:
        return{
          ...state,
          showCandidate: 'showCandidate2'
        };
      case SHOW_CANDIDATE_3:
        return{
          ...state,
          showCandidate: 'showCandidate3'
        };
      case SHOW_CANDIDATE_4:
        return{
          ...state,
          showCandidate: 'showCandidate4'
        };
      case TODOS:
        return{
          ...state,
          showCandidate: 'todos'
        };
      case PERCENTAGE:
        return{
          ...state,
          showPercentage: true
        }
      case NOT_PERCENTAGE:
        return{
          ...state,
          showPercentage: false
        }
        default:
      throw new Error(`Unhandled action type: ${action.type}`)
    };
}

export default Reducer