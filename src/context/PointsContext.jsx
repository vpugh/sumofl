import React, { createContext, useReducer } from 'react';
import { pointsReducer } from '../reducer/pointsReducer';

export const PointsContext = createContext();

const PointsContextProvider = (props) => {
  const [points, pointsDispatch] = useReducer(pointsReducer, []);

  return (
    <PointsContext.Provider value={{points, pointsDispatch}}>
      {props.children}
    </PointsContext.Provider>
  )
}
 
export default PointsContextProvider;