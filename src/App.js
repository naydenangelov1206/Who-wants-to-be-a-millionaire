import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import QuestionScreen from "./components/QuestionScreen/QuestionScreen";
import EndScreen from "./components/EndScreen/EndScreen";

function App() {
  const optionScreen = true;
  const startGame = true;
  const endGame = true;

  return (
    <div>
      {/* <StartScreen></StartScreen> */}
      {/* {optionScreen && <SettingsScreen />} */}
      {startGame && <QuestionScreen />}
      {/* {endGame && <EndScreen />} */}
    </div>
  );
}
export default App;
