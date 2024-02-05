import { Dispatch } from "react";

interface NextButtonProps {
  dispatch: Dispatch<any>;
  answer: number | null;
}

const NextButton = ({ dispatch, answer }: NextButtonProps) => {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};

export default NextButton;
