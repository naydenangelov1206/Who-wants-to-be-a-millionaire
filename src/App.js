import "./App.css";
import { useState } from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import QuestionScreen from "./components/QuestionScreen/QuestionScreen";
import EndScreen from "./components/EndScreen/EndScreen";

function App() {
  let optionScreen = true;
  let endGame = true;
  const [startGame, setStartGame] = useState(false);

  return (
    <div>
      {!startGame && <StartScreen setStartGame={setStartGame} />}
      {startGame && <SettingsScreen setStartGame={setStartGame} />}
      {/* {optionScreen && <QuestionScreen />} */}
      {/* {endGame && <EndScreen />} */}
    </div>
  );
}
export default App;
