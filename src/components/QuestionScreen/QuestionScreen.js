import "./QuestionScreen.css";

import Answer from "../Answer/Answer";
import fiftyFifty from "./lifelineJokersImages/fifty-fifty.png";
import callAFriend from "./lifelineJokersImages/call-a-friend.png";
import helpFromTheAudience from "./lifelineJokersImages/help-from-the-audience.png";

const QuestionScreen = () => {
  const answer = true;

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
          {answer && <button>Next Question</button>}
        </div>
      </div>

      <div className="questionAndAnswer">
        <div className="questionContainer">
          <h2>Question Test</h2>
        </div>

        <div className="answerContainer">
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
