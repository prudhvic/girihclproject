import React from "react";
import { useQuizContext } from "../context/QuizContext";
import Question from "./Question";

const QuestionContainer = () => {
  let { questions, score } = useQuizContext();

  console.log(questions);
  return (
    <div className="app-container">
      <div className="quiz-container">
        {questions.map((quiz) => (
          <Question quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuestionContainer;
