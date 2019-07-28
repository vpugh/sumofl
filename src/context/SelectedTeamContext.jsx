import React, { createContext, useReducer, useEffect } from 'react';
import { selectedTeamReducer } from '../reducer/selectedTeamReducer'

export const SelectTeamContext = createContext();

const SelectTeamContextProvider = (props) => {
  const [selectedTeam, dispatch] = useReducer(selectedTeamReducer, [], () => {
    const localData = localStorage.getItem('sumoTeam');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('sumoTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  return (
    <SelectTeamContext.Provider value={{selectedTeam, dispatch}}>
      {props.children}
    </SelectTeamContext.Provider>
  )
}
 
export default SelectTeamContextProvider;