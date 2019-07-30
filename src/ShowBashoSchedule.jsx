import React from 'react';
import BashoSchedule from './data/basho-schedule-2019.json';

const ShowBashoSchedule = ({
  title,
  bashoType,
  currentYear,
  selectBasho,
}) => {

  const bashoSchedule = () => {
    return Object.keys(BashoSchedule[currentYear]);
  }

  const allBasho = type => {
    return bashoSchedule().reduce((acc, basho) => {
      const bashoDate = BashoSchedule[currentYear][basho].start;
      const bashoMonth = bashoDate.split(' ')[0];
      const bashoDay = bashoDate.split(' ')[1];
      if (type === 'upcoming' && new Date(`${currentYear}/${bashoMonth}/${bashoDay}`) > new Date()) {
        acc.push(basho);
      }
      if (type === 'old' && new Date(`${currentYear}/${bashoMonth}/${bashoDay}`) < new Date()) {
        acc.push(basho);
      }
      return acc;
    }, []);
  }

  // color: 'grey', textDecoration: 'line-through'

  return (
    <>
      <h2>{title}</h2>
      {allBasho(bashoType).map(basho => (
        <React.Fragment key={basho}>
        <h3 onClick={() => selectBasho(basho)} style={{ marginBottom: '.25rem', marginTop: '.5rem' }}>{basho} - {BashoSchedule[currentYear][basho].start} {BashoSchedule[currentYear][basho].location}</h3>
      </React.Fragment>
      ))}
    </>
  );
};

export default ShowBashoSchedule;