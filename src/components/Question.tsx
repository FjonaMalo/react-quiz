import Options from "./Options";
interface QuestionProps {
  question: {
    question: string;
    options: string[];
  };
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
};

export default Question;
