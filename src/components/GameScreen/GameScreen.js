import "./GameScreen.css";

import { useEffect, useState } from "react";
import Answer from "../Answer/Answer";
import fiftyFifty from "./lifelineJokersImages/fifty-fifty.png";
import callAFriend from "./lifelineJokersImages/call-a-friend.png";
import helpFromTheAudience from "./lifelineJokersImages/help-from-the-audience.png";
import EndScreen from "../EndScreen/EndScreen";
import he from "he";
import Timer from "../Timer/Timer";
import BackgroundMusic from "../BackgroundMusic/BackgroundMusic";

const GameScreen = ({
  selectedCategory,
  selectedDifficulty,
  setSelectedCategory,
  setSelectedDifficulty,
  setStartGame,
  setSettingsScreen,
  setStartNewGame,
}) => {
  const [questions, setQuestions] = useState([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [userAnswer, setUserAnswer] = useState(null);

  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const [showNextButton, setShowNextButton] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [score, setScore] = useState(0);

  const [usedJokers, setUsedJokers] = useState({
    isFiftyFiftyUsed: false,
    isCallAFriendUsed: false,
    isHelpFromAudienceUsed: false,
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const [overlayMessage, setOverlayMessage] = useState("");

  const [showCorrectAnswerMessage, setShowCorrectAnswerMessage] =
    useState(false);

  const [showIncorrectAnswerMessage, setShowIncorrectAnswerMessage] =
    useState(false);

  const [timer, setTimer] = useState(60);

  const resetGame = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setUserAnswer(null);
    setShowOverlay(false);
    setUsedJokers({
      isFiftyFiftyUsed: false,
      isCallAFriendUsed: false,
      isHelpFromAudienceUsed: false,
    });
    setOverlayMessage("");
    setShowCorrectAnswer(false);
    setShowNextButton(false);
    setScore(0);
    setGameOver(false);
    setStartGame(false);
    setSettingsScreen(true);
    setStartNewGame(false);
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=15&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`
        );

        const data = await response.json();
        setQuestions(data.results);

        setSelectedCategory("");
        setSelectedDifficulty("");
      } catch (error) {
        return error;
      }
    }
    fetchQuestions();
  }, [selectedCategory, selectedDifficulty]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setUserAnswer(null);
      setShowCorrectAnswer(false);
      setShowCorrectAnswerMessage(false);
      setShowIncorrectAnswerMessage(false);
      setShowNextButton(false);
      setTimer(60);
      answers.sort(() => Math.random() - 0.5);
    } else {
      setGameOver(true);
    }
  };

  const handleAnswer = answer => {
    if (showCorrectAnswerMessage || showIncorrectAnswerMessage) {
      return;
    }

    setUserAnswer(answer);
    setShowCorrectAnswer(true);

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(prevScore => prevScore + 1);
      setShowNextButton(true);
    } else {
      setShowIncorrectAnswerMessage(true);
      setShowCorrectAnswerMessage(true);

      setTimeout(() => {
        setGameOver(true);
      }, 3000);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setGameOver(true);
    }
  };

  const handleTimeUp = () => {
    setGameOver(true);
  };

  const handleFiftyFifty = () => {
    if (usedJokers.isFiftyFiftyUsed) {
      return;
    }

    setUsedJokers(prev => ({
      ...prev,
      isFiftyFiftyUsed: true,
    }));

    const currentAnswers = [
      ...questions[currentQuestionIndex].incorrect_answers,
    ];
    const correctAnswer = questions[currentQuestionIndex].correct_answer;

    let randomIndex1, randomIndex2;
    do {
      randomIndex1 = Math.floor(Math.random() * currentAnswers.length);
    } while (currentAnswers[randomIndex1] === correctAnswer);

    do {
      randomIndex2 = Math.floor(Math.random() * currentAnswers.length);
    } while (
      randomIndex1 === randomIndex2 ||
      currentAnswers[randomIndex2] === correctAnswer
    );

    currentAnswers.splice(randomIndex1, 1);
    currentAnswers.splice(randomIndex2, 1);

    const updatedQuestion = {
      ...questions[currentQuestionIndex],
      incorrect_answers: currentAnswers,
    };

    const updatedQuestions = [
      ...questions.slice(0, currentQuestionIndex),
      updatedQuestion,
      ...questions.slice(currentQuestionIndex + 1),
    ];

    setQuestions(updatedQuestions);
  };

  const handleCallAFriend = () => {
    if (usedJokers.isCallAFriendUsed) return;

    setUsedJokers(prev => ({
      ...prev,
      isCallAFriendUsed: true,
    }));

    handleShowOverlay(
      "I think the correct answer is" +
        " " +
        questions[currentQuestionIndex].correct_answer
    );
  };

  const handleHelpFromAudience = () => {
    if (usedJokers.isHelpFromAudienceUsed) return;

    setUsedJokers(prev => ({
      ...prev,
      isHelpFromAudienceUsed: true,
    }));

    handleShowOverlay(
      "The public thinks the correct Answer is" +
        " " +
        questions[currentQuestionIndex].correct_answer
    );
  };

  const handleShowOverlay = message => {
    setShowOverlay(true);
    setOverlayMessage(message);
    setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
  };

  if (gameOver) {
    return <EndScreen score={score} resetGame={resetGame} />;
  }

  if (!questions.length) {
    return <div className="loadingContainer">Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];

  return (
    <div className="gameContainer">
      <div className="backgroundSoundContainer">
        <p>Sound:</p>
        <BackgroundMusic />
      </div>

      {showOverlay && (
        <div className="overlay">
          <p>{overlayMessage}</p>
        </div>
      )}

      <div className="lifelines">
        {!usedJokers.isFiftyFiftyUsed && (
          <img
            src={fiftyFifty}
            alt="fifty-lifeline/joker"
            width={70}
            onClick={handleFiftyFifty}
          />
        )}

        {!usedJokers.isCallAFriendUsed && (
          <img
            src={callAFriend}
            alt="call-a-friend-lifeline/joker"
            width={70}
            onClick={handleCallAFriend}
          />
        )}

        {!usedJokers.isHelpFromAudienceUsed && (
          <img
            src={helpFromTheAudience}
            alt="help-from-the-audience-lifeline/joker"
            width={70}
            onClick={handleHelpFromAudience}
          />
        )}

        <div className="nextQuestionButtonContainer">
          {showNextButton && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      </div>

      <div className="scoreContainer">
        <Timer onTimeUp={handleTimeUp} timer={timer} setTimer={setTimer} />

        <p>Score: {score}</p>
      </div>

      <div className="questionAndAnswer">
        <div className="questionContainer">
          <h2>{he.decode(currentQuestion.question)}</h2>
        </div>

        <div className="answerContainer">
          {answers.map((answer, index) => {
            const isCorrectAnswer =
              answer === questions[currentQuestionIndex].correct_answer;
            const isSelectedAnswer = answer === userAnswer;
            const shouldShowCorrectAnswer =
              showCorrectAnswer && isCorrectAnswer;
            const shouldShowIncorrectAnswer =
              showIncorrectAnswerMessage && isSelectedAnswer;

            return (
              <Answer
                key={index}
                answer={answer}
                index={index}
                userAnswer={userAnswer}
                correctAnswer={currentQuestion.correct_answer}
                showCorrectAnswer={showCorrectAnswer}
                showCorrectAnswerMessage={shouldShowCorrectAnswer}
                showIncorrectAnswerMessage={shouldShowIncorrectAnswer}
                handleAnswer={handleAnswer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
