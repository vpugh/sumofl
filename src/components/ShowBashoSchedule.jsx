import React, { useState } from 'react';
import BashoSchedule from '../data/basho-schedule-2019.json';
import moment from 'moment';

const ShowBashoSchedule = ({
  title,
  bashoType,
  currentYear,
  selectBasho,
}) => {

  const [isVisible, setIsVisible] = useState(true);

  const bashoSchedule = () => {
    return Object.keys(BashoSchedule[currentYear]);
  }

  const handleVisibility = e => {
    e.preventDefault();
    setIsVisible(!isVisible);
  }

  const allBasho = type => {
    return bashoSchedule().reduce((acc, basho) => {
      const BashoStart = moment(BashoSchedule[currentYear][basho].timestamp.start)
      const BashoEnd = moment(BashoSchedule[currentYear][basho].timestamp.end)
      const today = moment();
      const isBetween = moment(today).isBetween(BashoStart, BashoEnd)
      const isStartBefore = moment(today).isSameOrBefore(BashoStart);
      const isStartAfter = moment(today).isSameOrAfter(BashoStart);
      const isEndBefore = moment(today).isSameOrBefore(BashoEnd);
      const isEndAfter = moment(today).isSameOrAfter(BashoEnd);
      if (type === 'upcoming' && isStartBefore && isEndBefore) {
        acc.push(basho);
      }
      if (type === 'current' && isBetween) {
        acc.push(basho);
      }
      if (type === 'old' && isStartAfter && isEndAfter) {
        acc.push(basho);
      }
      return acc;
    }, []);
  }

  return (
    <>
      <h2 onClick={handleVisibility}>{title}</h2>
      {isVisible && (
        allBasho(bashoType).reverse().map(basho => (
          <React.Fragment key={basho}>
            <h3 onClick={() => selectBasho(basho)} className={`${bashoType === 'old' && 'old-basho'}`} style={{ marginBottom: '.25rem', marginTop: '.5rem' }}>{basho} - {BashoSchedule[currentYear][basho].start} {BashoSchedule[currentYear][basho].location}</h3>
          </React.Fragment>
        ))
      )}
    </>
  );
};

export default ShowBashoSchedule;