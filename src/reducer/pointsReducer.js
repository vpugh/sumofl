export const pointsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_POINTS':
      console.log('Initial State', state, action);
      if (state !== undefined && state.length > 0) {
        const newArr = state.concat(action.points);
        // const total = newArr.reduce((a, b) => a + b, 0);
        // return total;
        return newArr;
      }
      if (state === undefined) {
        return state.concat(action.points);
      }
      return state.concat(action.points);
    case 'REMOVE_POINTS':
        return [];
    default:
      return state;
  }
}