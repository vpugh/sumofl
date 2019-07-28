import React, { createContext, useReducer } from 'react';
import { pointsReducer } from '../reducer/pointsReducer';

export const PointsContext = createContext();

const PointsContextProvider = (props) => {
  const [points, pointsDispatch] = useReducer(pointsReducer, []);
  console.log('Points Context', points);

  return (
    <PointsContext.Provider value={{points, pointsDispatch}}>
      {props.children}
    </PointsContext.Provider>
  )
}
 
export default PointsContextProvider;