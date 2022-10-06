import React from "react";
import { useQuizContext } from "../context/QuizContext";

const Results = () => {
  let { score } = useQuizContext();
  return (
    <div className="results">
      <h2>Results</h2>
      <p>Your score is: {score}</p>
    </div>
  );
};

export default Results;
