import React, { useContext, useEffect } from 'react';
import './App.css';
import Nagoya from './data/nagoya-july-2019.json';
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

function App() {
  const { points, pointsDispatch } = useContext(PointsContext);
  const { selectedTeam, dispatch } = useContext(SelectTeamContext);
  const fantasyPoints = addArray(points);
  const teamAvailable = selectedTeam.length > 0;

  const leagueOpen = () => {
    const date = new Date().getMonth();
    const test = true;
    if (test) {
      return '- League in Testing...';
    }
    if (date % 2 === 0) {
      return '- League Closed'
    }
    return '- League Open'
  }

  useEffect(() => {
    document.title = `Sumo Fantasy League ${leagueOpen()}`;
  })
  const clearTeam = () => {
    dispatch({ type: 'CLEAR_TEAM'});
    pointsDispatch({ type: 'REMOVE_POINTS' })
  }

  return (
    <div className="App">
      <h1>{Nagoya.name} - {Nagoya.date}</h1>
      <div className="container">
      <div style={{ maxWidth: '70%', margin: '0 auto' }}>
        <div className="colorkey-container">
          <p style={{ margin: '0' }}>Color Key</p>
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
            <button onClick={clearTeam}>Clear Team</button>
          </>
        ) : <SelectTeam />}
      </div>
      {teamAvailable && Object.keys(Nagoya.matches).map(day => (
        <MatchDays key={day} day={day} matches={Nagoya.matches} />
      ))}
      </div>
    </div>
  );
}

export default App;
