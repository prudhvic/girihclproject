import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import Question from "./Question";
import emailjs from "@emailjs/browser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
const Quiz = () => {
  const [user, loading, error] = useAuthState(auth);
  let { id } = useParams();
  let navigate = useNavigate();
  let { setCategory, questions, setScore, score } = useQuizContext();
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
      <button
        className="finish-btn"
        onClick={() => {
          navigate("/quiz/result");
        }}
      >
        Finish
      </button>
    </main>
  );
};

export default Quiz;
