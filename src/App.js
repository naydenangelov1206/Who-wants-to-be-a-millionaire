import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import QuestionScreen from "./components/QuestionScreen/QuestionScreen";

function App() {
  const optionScreen = true;
  const startGame = true;

  return (
    <div>
      <StartScreen></StartScreen>
      {optionScreen && <SettingsScreen />}
      {startGame && <QuestionScreen />}
    </div>
  );
}
export default App;
