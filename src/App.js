import React from 'react';
import './App.css';
import './css/matches.scss';
import './css/layout.scss';
import BashoSchedule from './components/BashoSchedule';
import SidebarLinks from './components/SidebarLinks';
import SidebarAdminOptions from './components/SidebarAdminOptions';

function App() {

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
          <BashoSchedule />
          <div className="sidebar-divider" />
          <SidebarLinks />
          <div className="sidebar-divider" />
          <SidebarAdminOptions />
        </aside>
        <div>
          Main Content
        </div>
      </main>
    </>
  );
}

export default App;
