import React, { useState, useEffect } from "react";

function Timer({ className, setWinTime, timerOn, gameWon }) {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (timerOn) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter % 3600 / 60);
        const hourCounter = Math.floor(counter / 3600);

        let computedHour = (String(hourCounter).length) === 1 ? `0${hourCounter}` : hourCounter;
        let computedMinute = (String(minuteCounter).length) === 1 ? `0${minuteCounter}` : minuteCounter;
        let computedSecond = (String(secondCounter).length) === 1 ? `0${secondCounter}` : secondCounter;
        
        
        setSecond(computedSecond);
        setMinute(computedMinute);
        setHour(computedHour);
        
        // Record time as (1): string in HH/MM/SS, and (2): Seconds
        setWinTime({
          string: `${computedHour}:${computedMinute}:${computedSecond}`,
          secondCount: counter,
        });
        
        setCounter((counter) => counter + 1);
      }, 1000);
    }

    if (gameWon) {
      setSecond("00");
      setMinute("00");
      setHour("00");
      setCounter(0);
    }

    return () => clearInterval(intervalId);
  }, [timerOn, counter, setWinTime, gameWon]);

  return (
    <div className={className}>
      <h1>{hour}:{minute}:{second}</h1>
    </div>
  );
}

export default Timer;