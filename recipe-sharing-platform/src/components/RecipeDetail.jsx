
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json'; // Import the data.json directly

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate(); // To navigate back to the Home Page

  useEffect(() => {
    // Find the recipe by ID
    const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  // If recipe is not found, return an error message
  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Recipe not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-80 object-cover rounded-lg mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default RecipeDetail;
