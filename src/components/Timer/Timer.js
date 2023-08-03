import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="timer">{timer > 0 ? `Time Left: ${timer}` : "Time's up"}</p>
  );
};

export default Timer;
