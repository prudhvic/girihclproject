import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <header>
      <h1>QuizApp</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">categories</Link>
          </li>
          <li className="signin-btn">
            <Link to="/signin">
              <FaSignInAlt />
              signIn
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
