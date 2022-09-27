import { useContext, useEffect, useMemo, useState } from "react";
import { createContext } from "react";
let QuizContext = createContext();
let QuizContextProvider = ({ children }) => {
  let [questions, setQuestions] = useState([]);
  let [score, setScore] = useState(0);
  let fetchQuestions = async () => {
    let response = await fetch(
      "https://the-trivia-api.com/api/questions?limit=20"
    );
    let data = await response.json();
    console.log(data);
    let newdata = data.map((question) => ({
      ...question,
      answers: [...question.incorrectAnswers, question.correctAnswer].sort(
        () => Math.random() - 0.5
      ),
    }));
    setQuestions(newdata);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  let increase = () => {
    setScore((prev) => prev + 1);
  };
  let decrease = () => {
    setScore((prev) => prev - 1);
  };
  return (
    <QuizContext.Provider
      value={{ questions, score, setScore, increase, decrease }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export let useQuizContext = () => useContext(QuizContext);
export default QuizContextProvider;
