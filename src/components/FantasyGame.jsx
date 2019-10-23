import React, { useContext } from 'react';
import '../App.css';
import MatchDays from './MatchDays';
import { SelectTeamContext } from '../context/SelectedTeamContext';
import { PointsContext } from '../context/PointsContext';
import '../css/matches.scss';
import SelectTeam from '../components/SelectTeam';
import ViewTeam from './ViewTeam';

function FantasyGameContainer({ basho }) {
  const { selectedTeam, dispatch } = useContext(SelectTeamContext);
  const { points } = useContext(PointsContext);
  let teamAvailable;
  if (selectedTeam && selectedTeam[basho.date] !== undefined) {
    teamAvailable = selectedTeam[basho.date].length > 0;
  }

  const clearTeam = () => {
    dispatch({ type: 'CLEAR_TEAM', basho: basho.date });
  }
  
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{basho.name || ''} - {basho.date || ''}</h1>
      <div className="container">
        <div className="fantasy">
          {teamAvailable && !selectedTeam[basho.date].includes("") ? (
            <ViewTeam selectedTeam={selectedTeam[basho.date]} clearTeam={clearTeam} fantasyPoints={points[basho.name] || points || 0} />
          ) : <SelectTeam basho={basho} />}
        </div>
        {teamAvailable && Object.keys(basho.matches).map(day => (
          <MatchDays key={day} day={day} basho={basho} />
        ))}
      </div>
    </>
  );
}

export default FantasyGameContainer;
