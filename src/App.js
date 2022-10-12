import "./App.css";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/category/:id" element={<Quiz />} />
        <Route path="/quiz/result" element={<Results />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
