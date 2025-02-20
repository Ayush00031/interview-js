import { useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const resetTime = () => {
    setTime(0);
    clearInterval(intervalRef.current);
  };
  const play = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={play}>Play</button>
      <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
};
