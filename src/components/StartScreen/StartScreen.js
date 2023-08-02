import "./StartScreen.css";

const StartScreen = ({ setStartGame }) => {
  return (
    <div className="startScreenContainer">
      <div className="startButtonContainer">
        <button onClick={() => setStartGame(true)} className="startButton">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
