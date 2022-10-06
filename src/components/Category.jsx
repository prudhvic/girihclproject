import React from "react";
import { categories } from "../utils/categoryData";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <main className="category-section">
      <h1>choose category to start quiz</h1>
      <div className="category-container">
        {categories.map((category) => (
          <Link to={`/category/${category.category}`} key={category.name}>
            <img src={category.src} alt={category.name} />
            <h2>{category.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Category;
