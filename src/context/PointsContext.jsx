import React, { createContext, useReducer } from 'react';
import { pointsReducer } from '../reducer/pointsReducer';

export const PointsContext = createContext();

const PointsContextProvider = (props) => {
  const [points, dispatch] = useReducer(pointsReducer, []);

  return (
    <PointsContext.Provider value={{points, dispatch}}>
      {props.children}
    </PointsContext.Provider>
  )
}
 
export default PointsContextProvider;