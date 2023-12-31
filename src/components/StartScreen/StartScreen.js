import "./StartScreen.css";

const StartScreen = ({ handleChangeScreen }) => {
  return (
    <div className="startScreenContainer">
      <div className="startButtonContainer">
        <button onClick={handleChangeScreen} className="startButton">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
