const EndScreen = () => {
  const won = true;

  return (
    <div id="endScreenContainer">
      <div id="endScreenMessage">
        <h2>End of the game!</h2>
        <p>Submitted wrong answer or timed out.</p>
        {won && <p>CONGRATULATIONS YOU WON 100,000lv.</p>}
        <p>Answered questions: 12</p>
      </div>

      <div id="questionAndPrizesTable">
        <p>15: 100 000</p>
        <p>14: 50 000</p>
        <p>13: 30 000</p>
        <p>12: 20 000</p>
        <p>11: 10 000</p>
        <p>10: 5 000</p>
        <p>9: 3 000</p>
        <p>8: 2 000</p>
        <p>7: 1 500</p>
        <p>6: 1 000</p>
        <p>5: 500</p>
        <p>4: 400</p>
        <p>3: 300</p>
        <p>2: 200</p>
        <p>1: 100</p>
      </div>

      <div id="buttonContainer">
        <button>Play Again</button>
      </div>
    </div>
  );
};

export default EndScreen;
