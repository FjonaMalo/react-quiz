import { Dispatch } from "react";
import Options from "./Options";

interface QuestionProps {
  question: {
    question: string;
    correctOption: number;
    options: string[];
  };
  dispatch: Dispatch<any>;
  answer: number | null;
}

const Question = ({ question, dispatch, answer }: QuestionProps) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
