import { Dispatch } from "react";

interface StartScreenProps {
  numQuestions: number;
  dispatch: Dispatch<any>;
}

const StartScreen = ({ numQuestions, dispatch }: StartScreenProps) => {
  return (
    <div className="start">
      <h2>Welcome the The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
