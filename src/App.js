import React, { useContext } from 'react';
import './App.css';
import Nagoya from './data/nagoya-july-2019.json';
import FantasyTeam from './data/fantasy-team.json';
import MatchDays from './MatchDays';
import { PointsContext } from './context/PointsContext';
import './css/matches.scss';

const addArray = arr => {
  if (arr.length > 0) {
    return arr.reduce((a, b) => a + b, 0);
  }
}

function App() {
  const { points } = useContext(PointsContext);
  const fantasyPoints = addArray(points);

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
        <p>
          Fantasy Team: <br />
          <span className="fantasy-team">
            {FantasyTeam["fantasy-team"].join(', ')}
          </span>
        </p>
        <p>
          Total Points: <br />
          <span className="fantasy-points">
            {fantasyPoints}
          </span>
        </p>
      </div>
      {Object.keys(Nagoya.matches).map(day => (
        <MatchDays key={day} day={day} matches={Nagoya.matches} />
      ))}
      </div>
    </div>
  );
}

export default App;
