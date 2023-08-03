import "./App.css";
import { useState } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import GameScreen from "./components/GameScreen/GameScreen";

function App() {
  const [settingsScreen, setSettingsScreen] = useState(false);

  const [startGame, setStartGame] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const [startNewGame, setStartNewGame] = useState(true);

  const handleChangeScreen = () => {
    setStartNewGame(false);
    setSettingsScreen(true);
  };

  return (
    <div>
      {startNewGame && <StartScreen handleChangeScreen={handleChangeScreen} />}
      {settingsScreen && !startGame ? (
        <SettingsScreen
          setStartGame={setStartGame}
          setSelectedCategory={setSelectedCategory}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
        />
      ) : null}
      {startGame && (
        <GameScreen
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedCategory={selectedCategory}
          setSelectedDifficulty={selectedDifficulty}
          setStartGame={setStartGame}
          setSettingsScreen={setSettingsScreen}
          setStartNewGame={setStartNewGame}
        />
      )}
    </div>
  );
}
export default App;
