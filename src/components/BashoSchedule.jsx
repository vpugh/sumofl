import React from 'react';
import ShowBashoSchedule from './ShowBashoSchedule';

const currentYear = new Date().getFullYear();

const BashoSchedule = ({ pickBasho }) => {
  return (
    <div>
      <ShowBashoSchedule selectBasho={pickBasho} title="Upcoming Bashos" bashoType="upcoming" currentYear={currentYear} />
      <ShowBashoSchedule selectBasho={pickBasho} title="Current Basho" bashoType="current" currentYear={currentYear} />
      <ShowBashoSchedule selectBasho={pickBasho} title="Past Bashos" bashoType="old" currentYear={currentYear} />
    </div>
  );
};

export default BashoSchedule;