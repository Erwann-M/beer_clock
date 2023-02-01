import "./style.scss";
import CountdownTimer from "../../hook/CountdownTimer"

const Counter = () => {
  // const ONE_WEEK = 7 * 24 * 60 * 60 * 1000
  const dateTimeAfterOneWeek = new Date("2023-02-03T16:00:00").getTime();

  return (
    <div className="counter">
      <CountdownTimer targetDate={dateTimeAfterOneWeek} />
    </div>
  )
};

export default Counter;
