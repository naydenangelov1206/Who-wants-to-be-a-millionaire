import StartScreen from "./components/StartScreen/StartScreen";
import "./App.css";
function App() {
  fetch("https://opentdb.com/api.php?amount=15&category=22&difficulty=easy")
    .then(data => data.json())
    .then(questions => console.log(questions.results));

  return (
    <div>
      <StartScreen></StartScreen>
    </div>
  );
}

export default App;
