import "./App.css";
import { useState } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import GameScreen from "./components/GameScreen/GameScreen";

function App() {
  const [settingsScreen, setSettingsScreen] = useState(false);

  const [startGame, setStartGame] = useState(false);

  return (
    <div>
      {!settingsScreen && <StartScreen setSettingsScreen={setSettingsScreen} />}
      {settingsScreen && !startGame ? (
        <SettingsScreen
          setSettingsScreen={setSettingsScreen}
          setStartGame={setStartGame}
        />
      ) : null}
      {startGame && <GameScreen />}
    </div>
  );
}
export default App;
