import "./style.scss";
import CountdownTimer from "../../hook/CountdownTimer"

const Counter = () => {
  const ONE_WEEK = 7 * 24 * 60 * 60 * 1000
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterOneWeek = NOW_IN_MS + ONE_WEEK;

  return (
    <div className="counter">
      <CountdownTimer targetDate={dateTimeAfterOneWeek} />
    </div>
  )
};

export default Counter;
