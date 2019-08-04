import React from 'react';

const ViewTeam = ({ selectedTeam, fantasyPoints, clearTeam }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      
      <ul className="fantasy-team">
        <p>Fantasy Team:</p>
        {selectedTeam.map(fighter => <li key={fighter}><strong>{fighter}</strong></li>)}
      </ul>
      <p className="fantasy-points">
        Total Points: <strong>{fantasyPoints}</strong>
      </p>
      <button className="button" onClick={clearTeam}>Clear Team</button>
    </div>
  );
};

export default ViewTeam;