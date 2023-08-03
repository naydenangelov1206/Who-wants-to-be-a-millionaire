const Answer = ({
  answer,
  index,
  userAnswer,
  correctAnswer,
  showCorrectAnswer,
  handleAnswer,
}) => {
  const answerKeys = ["A", "B", "C", "D"];

  const isUserAnswerCorrect = userAnswer === correctAnswer;
  const isThisAnswerCorrect = answer === correctAnswer;
  const isUserAnswerWrong = userAnswer && !isUserAnswerCorrect;

  const answerClickHandler = () => {
    if (!showCorrectAnswer) {
      handleAnswer(answer);
    }
  };

  return (
    <p>
      {answerKeys[index]}: {answer}
    </p>
  );
};

export default Answer;
