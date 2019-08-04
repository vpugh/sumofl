import React, { useState } from 'react';
import './App.css';
import './css/matches.scss';
import './css/layout.scss';
import Test from './data/test-january-2019.json';
import Natsu from './data/natsu-may-2019.json';
import Nagoya from './data/nagoya-july-2019.json';
import Aki from './data/aki-september-2019.json';
import BashoSchedule from './components/BashoSchedule';
import SidebarLinks from './components/SidebarLinks';
import SidebarAdminOptions from './components/SidebarAdminOptions';
import BashoMatch from './components/BashoMatch';

function App() {
  const [currentBasho, setCurrentBasho] = useState('');

  const showSelectedBasho = bashoName => {
    // TODO replace with API calling selected name from database;
    switch(bashoName) {
      case 'Nagoya':
        setCurrentBasho(Nagoya);
        break;
      case 'Aki':
        setCurrentBasho(Aki);
        break;
      case 'Natsu':
        setCurrentBasho(Natsu);
        break;
      case 'Test':
        setCurrentBasho(Test);
        break;
      default:
        setCurrentBasho('');
        return;
    }
  }

  const pickBasho = basho => showSelectedBasho(basho);

  return (
    <>
      <header>
        <h1>Sumo Fantasy League</h1>
        <div className="user-container">
          Sample User
          <div className="user-avatar" />
        </div>
      </header>
      <main>
        <aside>
          <BashoSchedule pickBasho={pickBasho} />
          <div className="sidebar-divider" />
          <SidebarLinks />
          <div className="sidebar-divider" />
          <SidebarAdminOptions />
        </aside>
        <BashoMatch currentBasho={currentBasho} />
      </main>
    </>
  );
}

export default App;
