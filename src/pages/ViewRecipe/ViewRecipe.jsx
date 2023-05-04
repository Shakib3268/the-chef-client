import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";

const ViewRecipe = () => {
  const chef = useLoaderData();
  const { name,picture,years_of_experience,num_recipes,likes,bio } = chef;
  const recipe = chef.recipes;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mt-4 mb-4 text-center">
        <figure>
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <p>Experience: {years_of_experience}</p>
          <p>Number Of Recipes: {num_recipes}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Recipe</button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 p-4">
        {
            recipe.map(recipe => <RecipeDetails key={recipe.id} recipe={recipe}></RecipeDetails>)
        }
      </div>
    </div>
  );
};

export default ViewRecipe;
