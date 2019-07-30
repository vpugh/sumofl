import React, { useState, useEffect } from 'react';
import './App.css';
import Nagoya from './data/nagoya-july-2019.json';
import './css/matches.scss';
import FantasyGameContainer from './FantasyGame';
import ShowBashoSchedule from './ShowBashoSchedule';

function App() {
  const [currentBasho, setCurrentBasho] = useState('');

  const convertJapanTime = () => {
    const offset = +9;
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*offset));
    // console.log(nd);
  }

  const showSelectedBasho = bashoName => {
    // TODO replace with API calling selected name from database;
    switch(bashoName) {
      case 'Nagoya':
        setCurrentBasho(Nagoya);
        return;
      default:
        setCurrentBasho('');
        return;
    }
  }

  const pickBasho = basho => {
    console.log(basho);
    showSelectedBasho(basho)
  }

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

  const currentYear = new Date().getFullYear();
  convertJapanTime();

  return (
    <div className="App">
      <div>
        <ShowBashoSchedule selectBasho={pickBasho} title="Old Bashos" bashoType="old" currentYear={currentYear} />
        <ShowBashoSchedule selectBasho={pickBasho} title="Upcoming Bashos" bashoType="upcoming" currentYear={currentYear} />
      </div>
      {currentBasho && (
        <FantasyGameContainer basho={currentBasho} />
      )}
      {!currentBasho && <p>Not Ready</p>}
    </div>
  );
}

export default App;
