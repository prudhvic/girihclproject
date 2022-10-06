import "./App.css";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/category/:id" element={<Quiz />} />
        <Route path="/quiz/result" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
