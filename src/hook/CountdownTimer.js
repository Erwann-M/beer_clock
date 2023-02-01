import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import beer_load from "../img/beer_anim.gif"

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <img className='beer-loader' src={beer_load} alt="beer loader"/>
      <p>C'est l'heure !!!</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={'Jours'} isDanger={days < 1} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Heures'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Minutes'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Secondes'} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
