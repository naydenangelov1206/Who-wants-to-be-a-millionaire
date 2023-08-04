import "./EndScreen.css";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";

const EndScreen = ({ score, resetGame }) => {
  const winnings = {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "1 000",
    7: "1 500",
    8: "2 000",
    9: "3 000",
    10: "5 000",
    11: "10 000",
    12: "20 000",
    13: "30 000",
    14: "50 000",
  };

  const won = score === 15;

  return (
    <div className="endScreenContainer">
      <div className="backgroundSoundContainer">
        <p>Sound:</p>
        <BackgroundMusic />
      </div>

      <div className="endScreenMessage">
        <h2>End of the game!</h2>
        <p>Submitted wrong answer or timed out.</p>
        {won ? (
          <p>CONGRATULATIONS YOU WON 100,000lv.</p>
        ) : (
          <p>You won {winnings[score]}lv.</p>
        )}
        <p>Answered questions: {score}</p>
      </div>

      <div className="questionAndPrizesTable">
        <p className="prizeText">Prize won:</p>
        <p className="waypoint">15: 100 000</p>
        <p>14: 50 000</p>
        <p>13: 30 000</p>
        <p>12: 20 000</p>
        <p>11: 10 000</p>
        <p className="waypoint">10: 5 000</p>
        <p>9: 3 000</p>
        <p>8: 2 000</p>
        <p>7: 1 500</p>
        <p>6: 1 000</p>
        <p className="waypoint">5: 500</p>
        <p>4: 400</p>
        <p>3: 300</p>
        <p>2: 200</p>
        <p className="waypoint">1: 100</p>
      </div>

      <div className="playAgainButtonContainer">
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
};

export default EndScreen;
