const Answer = () => {
  const answerKeys = ["A", "B", "C", "D"];

  return (
    <p>
      {answerKeys.map(k => {
        return k;
      })}
      : test answer
    </p>
  );
};

export default Answer;
