import "./GameScreen.css";

import { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import fiftyFifty from "./lifelineJokersImages/fifty-fifty.png";
import callAFriend from "./lifelineJokersImages/call-a-friend.png";
import helpFromTheAudience from "./lifelineJokersImages/help-from-the-audience.png";
import EndScreen from "../EndScreen/EndScreen";

const GameScreen = () => {
  const [questions, setQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(
          " https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=multiple"
        );

        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        return error;
      }
    }
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return <EndScreen />;
  }

  if (!questions.length) {
    return <div className="loadingContainer">Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];

  answers.sort(() => Math.random() - 0.5);

  return (
    <div className="gameContainer">
      <div className="lifelines">
        <img src={fiftyFifty} alt="fifty-lifeline/joker" width={70} />

        <img src={callAFriend} alt="call-a-friend-lifeline/joker" width={70} />

        <img
          src={helpFromTheAudience}
          alt="help-from-the-audience-lifeline/joker"
          width={70}
        />

        <div className="nextQuestionButtonContainer">
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      </div>

      <div className="questionAndAnswer">
        <div className="questionContainer">
          <h2>{currentQuestion.question}</h2>
        </div>

        <div className="answerContainer">
          {answers.map((answer, index) => {
            return <Answer key={index} answer={answer} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
