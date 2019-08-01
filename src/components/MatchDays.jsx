import React, { useState, useContext, useEffect, useCallback } from 'react';
import { PointsContext } from '../context/PointsContext';
import { SelectTeamContext } from '../context/SelectedTeamContext';

const generateReadableDay = day => {
  const dayName = day.match(/.{3}/g);
  const number = day.substring(3);
  return `${dayName} ${number}`;
}

const MatchDays = ({ day, matches }) => {
  const [matchOpen, setMatchOpen] = useState(false);
  const { pointsDispatch } = useContext(PointsContext);
  const { selectedTeam } = useContext(SelectTeamContext);
  
  const handleVisibility = () => {
    setMatchOpen(!matchOpen);
  }

  const highlightMatchWinner = (fighter, winner) => {
    if (fighter === winner) {
      return (
        <span className={`fighter-names ${selectedTeam.includes(winner) ? 'selected-winner' : 'match-winner'} `}>
          {fighter}
        </span>
      );
    }
    return (
      <span className={`fighter-names ${selectedTeam.includes(fighter) ? 'selected-loss' : ''}`}>
        {fighter}
      </span>
    );
  };

  const dailyFantasyPoints = () => {
    const currentDay = matches[day];
    const fantasyWinners = currentDay.reduce((acc, match) => {
      if (selectedTeam.includes(match.winner)) {
        acc.push(match.winner);
      }
      return acc;
    }, []);
    return fantasyWinners.length;
  };

  const returnWinners = useCallback(
    () => {
      const winnerMatches = matches[day].reduce((acc, match) => {
        if (selectedTeam.includes(match.winner)) {
          acc.push(match.winner);
        }
        return acc;
      }, []);
      pointsDispatch({ type: 'ADD_POINTS', points: winnerMatches.length })
    },
    [matches, day, pointsDispatch, selectedTeam],
  );

  useEffect(() => {
    returnWinners();
  }, [returnWinners]);

  return (
    <div className="match-container">
      <div role="button" onClick={handleVisibility} style={{ cursor: 'pointer' }}>
        <h3 className={`${matchOpen ? 'match-day match-day-highlighted' : 'match-day'}`}>
          {generateReadableDay(day)} <span style={{ fontStyle: "italic", fontWeight: "normal" }}>({dailyFantasyPoints()})</span>
        </h3>
      </div>
      {matchOpen && (
      <div className="match">
        {matches[day].map((d, index) => (
          <p key={index}>
            {highlightMatchWinner(d.fighters[0], d.winner)} vs{" "}
            {highlightMatchWinner(d.fighters[1], d.winner)}
          </p>
        ))}
      </div>
      )}
    </div>
  );
};

export default MatchDays;