import Answer from "../Answer/Answer";
import fiftyFifty from "./fifty-fifty.png";
import callAFriend from "./call-a-friend.png";
import helpFromTheAudience from "./help-from-the-audience.png";

const QuestionScreen = () => {
  const answer = false;

  return (
    <div id="questionAndAnswerContainer">
      <div id="lifelines">
        <img src={fiftyFifty} alt="fifty-lifeline/joker" width={70} />

        <img src={callAFriend} alt="call-a-friend-lifeline/joker" width={70} />

        <img
          src={helpFromTheAudience}
          alt="help-from-the-audience-lifeline/joker"
          width={70}
        />
      </div>

      <div id="questionContainer">
        <h2>Question Test</h2>
      </div>

      <div id="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>

      {answer && <button>Next</button>}
    </div>
  );
};
export default QuestionScreen;
