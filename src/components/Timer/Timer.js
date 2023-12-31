import { useEffect } from "react";

const Timer = ({ onTimeUp, timer, setTimer }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTime => prevTime - 1);
    }, 1000);

    if (timer === 0) {
      onTimeUp();
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  return (
    <p className="timer">{timer > 0 ? `Time Left: ${timer}` : "Time's up"}</p>
  );
};

export default Timer;
