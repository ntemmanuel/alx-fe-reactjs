import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, recipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
    recipes: state.recipes,
  }));

  const recipesToDisplay = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found. Try adjusting your search!</p>
      ) : (
        recipesToDisplay.map((recipe) => (
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
