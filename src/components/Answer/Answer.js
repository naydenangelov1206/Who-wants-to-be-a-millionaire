const Answer = ({ answer, index }) => {
  const answerKeys = ["A", "B", "C", "D"];

  return (
    <p>
      {answerKeys[index]}: {answer}
    </p>
  );
};

export default Answer;
