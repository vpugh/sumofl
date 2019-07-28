export const pointsReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_POINTS':
      return state.concat(action.points);
    case 'REMOVE_POINTS':
        return [];
    default:
      return state;
  }
}