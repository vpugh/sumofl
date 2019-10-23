import React, { createContext, useState } from 'react';

export const BashoContext = createContext();

const BashoContextProvider = (props) => {
  const [currentBasho, setCurrentBasho] = useState('');
  return (
    <BashoContext.Provider value={{currentBasho, setCurrentBasho}}>
      {props.children}
    </BashoContext.Provider>
  )
}

export default BashoContextProvider;