import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add some!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
