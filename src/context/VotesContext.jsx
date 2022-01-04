import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer";

const TotalVotesContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
  showPercentage: false,
  showCandidate: '',
  votesCandidate1: 0,
  votesCandidate2: 0,
  votesCandidate3: 0,
  votesCandidate4: 0,
  totalVotes: 0
}

const TotalVotesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState)
  return (
    <>
      <TotalVotesContext.Provider value={state}>
        <AppDispatchContext.Provider value={dispatch}>
        {children}
        </AppDispatchContext.Provider>
      </TotalVotesContext.Provider>
      ;
    </>
  );
};
export default TotalVotesProvider

export const useStateVotes = () => {
  const context = useContext(TotalVotesContext);

  if (context === undefined) {
    throw new Error("TotalVotesContext must be used within a ThemProvider");
  }
  return context
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("AppDispatchContext must be used within a AppProvider");
  }
  return context
}
