import Answer from "../Answer/Answer";

const QuestionScreen = () => {
  return (
    <div id="questionAndAnswerContainer">
      <div id="questionContainer">
        <h2>Question Test</h2>
      </div>
      <div id="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};
export default QuestionScreen;
