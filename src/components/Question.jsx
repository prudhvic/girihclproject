import React, { useState } from "react";
import { useQuizContext } from "../context/QuizContext";

const Question = ({ question }) => {
  let [answer, setAnswer] = useState("");
  let { setScore, score } = useQuizContext();
  let [buttonsDisabled, setButtonsDisabled] = useState(false);
  let checkAnswer = () => {
    if (answer === "" && answer.length === 0) {
      alert("please select answert to submit");
      return;
    }
    if (answer === question.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
      setButtonsDisabled(true);
    }
  };
  let clearOption = () => {
    setButtonsDisabled(false);
    if (answer === question.correctAnswer) {
      setScore((prev) => prev - 1);
    }
    setAnswer("");
  };
  return (
    <div key={question.id} className="question-container">
      <p className="question">{question.question}</p>
      <div className="options">
        {question.options.map((option) => (
          <button
            disabled={buttonsDisabled}
            className={answer === option ? "select" : ""}
            onClick={() => setAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="edits">
        <button onClick={clearOption}>clear</button>
        <button onClick={checkAnswer}>submit</button>
      </div>
    </div>
  );
};

export default Question;
