export const selectedTeamReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TEAM':
      return { ...state, [action.basho.date]: action.selectedTeam };
    case 'CLEAR_TEAM':
      const filter = Object.keys(state).reduce((acc, key) => {
        const basho = { [key]: state[key] };
        if (key !== action.basho) {
          Object.assign(acc, basho);
        }
        return acc;
      }, {});
      return filter;
    default:
      return state;
  }
}