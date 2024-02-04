import { Dispatch } from "react";

interface OptionsProps {
  question: {
    correctOption: number;
    question: string;
    options: string[];
  };
  dispatch: Dispatch<any>;
  answer: number | null;
}

const Options = ({ question, dispatch, answer }: OptionsProps) => {
  const hasAnswered = answer !== null;

  const handleOptionClick = (index: number) => {
    dispatch({ type: "newAnswer", payload: index });
  };
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => handleOptionClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
