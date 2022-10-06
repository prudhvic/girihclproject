import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import Question from "./Question";
const Quiz = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let { setCategory, questions, setScore, score } = useQuizContext();
  console.log("HI", questions);
  useEffect(() => {
    if (id) {
      setCategory(id);
    }
    setScore(0);
  }, [id]);
  return (
    <main className="quiz-section">
      <h1>{id.split("_").join(" ")} Quiz</h1>
      <div className="quiz-container">
        {questions &&
          questions?.map((question) => <Question question={question} />)}
      </div>
      <button className="finish-btn" onClick={() => navigate("/quiz/result")}>
        Finish
      </button>
    </main>
  );
};

export default Quiz;
