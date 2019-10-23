export const pointsReducer = (state, action) => {
  switch(action.type) {
    case 'RESET_POINTS':
        return 0;
    case 'COMBINE_POINTS': 
    const newValue = +state + +action.points;
    console.log(state[action.basho]);
    console.log('Point State', state, action, newValue);
      return newValue;
    default:
      return state;
  }
}