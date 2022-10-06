import { useContext, useMemo, useState } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";
let QuizContext = createContext({});
let QuizContextProvider = ({ children }) => {
  let [category, setCategory] = useState("");
  let [score, setScore] = useState(0);
  let { data, isPending, error } = useFetch(
    `https://the-trivia-api.com/api/questions?categories=${category}&limit=20`
  );
  let questions = useMemo(() => {
    return data?.map((item) => {
      return {
        ...item,
        options: [...item.incorrectAnswers, item.correctAnswer].sort(
          () => Math.random() > 0.5
        ),
      };
    });
  }, [data]);

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        category,
        setCategory,
        questions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export let useQuizContext = () => useContext(QuizContext);
export default QuizContextProvider;
