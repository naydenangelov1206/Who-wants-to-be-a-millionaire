import StartScreen from "./components/StartScreen/StartScreen";
import "./App.css";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";

function App() {
  const startGame = true;

  return (
    <div>
      {/* <StartScreen></StartScreen> */}
      {startGame && <SettingsScreen></SettingsScreen>}
    </div>
  );
}

export default App;
