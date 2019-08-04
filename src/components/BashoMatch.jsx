import React, { useEffect } from 'react';
import '../css/matches.scss';
import FantasyGameContainer from './FantasyGame';
import EmptyGameContainer from './EmptyGameContainer';

const BashoMatch = ({ currentBasho }) => {
  
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
  });

  return (
    <div>
      {currentBasho
        ? <FantasyGameContainer basho={currentBasho} />
        : <EmptyGameContainer />
      }
    </div>
  );
};

export default BashoMatch;