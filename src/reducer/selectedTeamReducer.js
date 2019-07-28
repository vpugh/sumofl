export const selectedTeamReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TEAM':
      return action.selectedTeam;
    case 'CLEAR_TEAM':
      const newState = [];
      return newState;
    default:
      return state;
  }
}