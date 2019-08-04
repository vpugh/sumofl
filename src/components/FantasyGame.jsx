import React, { useContext } from 'react';
import '../App.css';
import MatchDays from './MatchDays';
import { PointsContext } from '../context/PointsContext';
import { SelectTeamContext } from '../context/SelectedTeamContext';
import '../css/matches.scss';
import SelectTeam from '../components/SelectTeam';
import ViewTeam from './ViewTeam';

const addArray = arr => {
  if (arr.length > 0) {
    return arr.reduce((a, b) => a + b, 0);
  }
}

function FantasyGameContainer({ basho }) {
  const { points, pointsDispatch } = useContext(PointsContext);
  const { selectedTeam, dispatch } = useContext(SelectTeamContext);
  const fantasyPoints = addArray(points);
  let teamAvailable;
  if (selectedTeam && selectedTeam[basho.date] !== undefined) {
    teamAvailable = selectedTeam[basho.date].length > 0;
  }

  const clearTeam = () => {
    dispatch({ type: 'CLEAR_TEAM', basho: basho.date });
    pointsDispatch({ type: 'REMOVE_POINTS' });
  }
  
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{basho.name || ''} - {basho.date || ''}</h1>
      <div className="container">
        <div className="fantasy">
          {teamAvailable && !selectedTeam[basho.date].includes("") ? (
            <ViewTeam selectedTeam={selectedTeam[basho.date]} fantasyPoints={fantasyPoints} clearTeam={clearTeam} />
          ) : <SelectTeam basho={basho} />}
        </div>
        {teamAvailable && Object.keys(basho.matches).map(day => (
          <MatchDays key={day} day={day} basho={basho} matches={basho.matches} />
        ))}
      </div>
    </>
  );
}

export default FantasyGameContainer;
