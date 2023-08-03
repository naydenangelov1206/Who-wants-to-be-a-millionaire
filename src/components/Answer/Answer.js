import classNames from "classnames";
import he from "he";

const Answer = ({
  answer,
  index,
  userAnswer,
  correctAnswer,
  showCorrectAnswer,
  showIncorrectAnswerMessage,
  handleAnswer,
}) => {
  const answerKeys = ["A", "B", "C", "D"];

  const isCorrectAnswer = answer === correctAnswer;
  const isSelectedAnswer = answer === userAnswer;
  const shouldShowCorrectAnswer = showCorrectAnswer && isCorrectAnswer;
  const shouldShowIncorrectAnswer =
    showIncorrectAnswerMessage && isSelectedAnswer;

  const handleClick = () => {
    if (!showCorrectAnswer && !showIncorrectAnswerMessage) {
      handleAnswer(answer);
    }
  };

  const answerClassNames = classNames("answer", {
    "selected": isSelectedAnswer,
    "correct": shouldShowCorrectAnswer,
    "incorrect": shouldShowIncorrectAnswer,
  });

  return (
    <div className={answerClassNames} onClick={handleClick}>
      {answerKeys[index]}: {he.decode(answer)}
    </div>
  );
};

export default Answer;
