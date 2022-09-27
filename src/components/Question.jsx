import React, { useState } from "react";
import { useQuizContext } from "../context/QuizContext";

const Question = ({ quiz }) => {
  let { increase } = useQuizContext();
  let [clickedAnswer, setClickedAnswer] = useState(false);
  let checkAnswer = (userAnswer, correctAnswer) => {
    setClickedAnswer(userAnswer);
    if (userAnswer === correctAnswer) {
      increase();
    }
  };

  return (
    <div className="question-container">
      <p className="question">{quiz.question}</p>
      <div className="answers">
        {quiz.answers.map((answer) => (
          <button
            disabled={clickedAnswer === quiz.correctAnswer}
            onClick={() => checkAnswer(answer, quiz.correctAnswer)}
            className={
              quiz.correctAnswer === clickedAnswer && answer === clickedAnswer
                ? "correct"
                : ""
            }
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
