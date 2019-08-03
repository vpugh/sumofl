import React from 'react';
import ShowBashoSchedule from './ShowBashoSchedule';

const currentYear = new Date().getFullYear();

const BashoSchedule = () => {
  return (
    <div>
      <ShowBashoSchedule selectBasho={() => {}} title="Upcoming Bashos" bashoType="upcoming" currentYear={currentYear} />
      <ShowBashoSchedule selectBasho={() => {}} title="Current Basho" bashoType="current" currentYear={currentYear} />
      <ShowBashoSchedule selectBasho={() => {}} title="Past Bashos" bashoType="old" currentYear={currentYear} />
    </div>
  );
};

export default BashoSchedule;