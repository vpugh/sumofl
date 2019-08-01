import React from 'react';

const ViewTeam = ({ selectedTeam, fantasyPoints, clearTeam }) => {
  return (
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
  );
};

export default ViewTeam;