import React, { useContext } from 'react';
import './App.css';
import MatchDays from './MatchDays';
import { PointsContext } from './context/PointsContext';
import { SelectTeamContext } from './context/SelectedTeamContext';
import './css/matches.scss';
import SelectTeam from './css/SelectTeam';

const addArray = arr => {
  if (arr.length > 0) {
    return arr.reduce((a, b) => a + b, 0);
  }
}

function FantasyGameContainer({ basho }) {
  const { points, pointsDispatch } = useContext(PointsContext);
  const { selectedTeam, dispatch } = useContext(SelectTeamContext);
  const fantasyPoints = addArray(points);
  const teamAvailable = selectedTeam.length > 0;

  // const convertJapanTime = () => {
  //   const offset = +9;
  //   const d = new Date();
  //   const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  //   const nd = new Date(utc + (3600000*offset));
  //   // console.log(nd);
  // }

  const clearTeam = () => {
    dispatch({ type: 'CLEAR_TEAM'});
    pointsDispatch({ type: 'REMOVE_POINTS' })
  }
  

  return (
    <div className="fantasygame-container">
      <h1>{basho.name || ''} - {basho.date || ''}</h1>
      <div className="container">
      <div style={{ maxWidth: '70%', margin: '0 auto' }}>
        <div className="colorkey-container">
          <span className="selected-winner color-key">Selected Winner</span>
          <span className="selected-loss color-key">Selected Loss</span>
          <span className="match-winner color-key">Non-Selected Winner</span>
        </div>
      </div>
      <div className="fantasy">
        {teamAvailable && !selectedTeam.includes("") ? (
          <>
            <p>
              Fantasy Team: <br />
              <span className="fantasy-team">
                {selectedTeam.join(', ')}
              </span>
            </p>
            <p>
              Total Points: <br />
              <span className="fantasy-points">
                {fantasyPoints}
              </span>
            </p>
            <button className="button" onClick={clearTeam}>Clear Team</button>
          </>
        ) : <SelectTeam />}
      </div>
      {teamAvailable && Object.keys(basho.matches).map(day => (
        <MatchDays key={day} day={day} matches={basho.matches} />
      ))}
      </div>
    </div>
  );
}

export default FantasyGameContainer;
