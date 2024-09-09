// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import recipeData from '../data.json'; // Mock data
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the data into state on component mount
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Recipe Sharing Platform</h1>
        {/* Link to Add Recipe Form */}
        <Link
          to="/add-recipe" // Link to the AddRecipeForm component
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Recipe Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 hover:border-indigo-500 border-2 border-transparent"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-3 text-gray-900">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`} // Link to the recipe detail page
                className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium transition-colors"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
