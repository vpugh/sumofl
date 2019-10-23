/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { SelectTeamContext } from '../context/SelectedTeamContext';
import { PointsContext } from '../context/PointsContext';

const generateReadableDay = day => {
  const dayName = day.match(/.{3}/g);
  const number = day.substring(3);
  return `${dayName} ${number}`;
}

const MatchDays = ({ day, basho }) => {
  const [matchOpen, setMatchOpen] = useState(false);
  const { selectedTeam } = useContext(SelectTeamContext);
  const { pointsDispatch } = useContext(PointsContext);
  
  const handleVisibility = () => {
    setMatchOpen(!matchOpen);
  }

  const highlightMatchWinner = (fighter, winner) => {
    if (fighter === winner) {
      return (
        <span className={`fighter-names ${selectedTeam[basho.date].includes(winner) ? 'selected-winner' : 'match-winner'} `}>
          {fighter}
        </span>
      );
    }
    return (
      <span className={`fighter-names ${selectedTeam[basho.date].includes(fighter) ? 'selected-loss' : ''}`}>
        {fighter}
      </span>
    );
  };

  const dailyFantasyPoints = () => {
    const currentDay = basho.matches[day];
    const fantasyWinners = currentDay.reduce((acc, match) => {
      if (selectedTeam[basho.date].includes(match.winner)) {
        acc.push(match.winner);
      }
      return acc;
    }, []);
    return fantasyWinners.length;
  };

  useEffect(() => {
    pointsDispatch({ type: 'COMBINE_POINTS', points: dailyFantasyPoints(), basho: basho.name })
  }, []);

  return (
    <div className="match-container">
      <div role="button" onClick={handleVisibility} style={{ cursor: 'pointer' }}>
        <h3 className={`${matchOpen ? 'match-day match-day-highlighted' : 'match-day'}`} style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span>
            {generateReadableDay(day)} Matchups
          </span>
          <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
            Daily Points: {dailyFantasyPoints()}/5
          </span>
        </h3>
      </div>
      {matchOpen && (
        <div className="match">
          <div style={{ textAlign: 'center' }}>
          {basho.matches[day].map((d, index) => (
            <p key={index}>
              {highlightMatchWinner(d.fighters[0], d.winner)} vs{" "}
              {highlightMatchWinner(d.fighters[1], d.winner)}
            </p>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDays;