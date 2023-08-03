import "./StartScreen.css";

const StartScreen = ({ setSettingsScreen }) => {
  return (
    <div className="startScreenContainer">
      <div className="startButtonContainer">
        <button onClick={() => setSettingsScreen(true)} className="startButton">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
