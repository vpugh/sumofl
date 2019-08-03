export const pointsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_POINTS':
      console.log(state, state.concat(action.points));
      return state.concat(action.points);
    case 'REMOVE_POINTS':
        return [];
    default:
      return state;
  }
}