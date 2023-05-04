import React from "react";
import {FaRegThumbsUp } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {picture,name,bio,years_of_experience,num_recipes,likes} = chef;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="img-fluid"
            src={picture}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-xl"> <span className="font-semibold">Details:</span> {bio}</p>
          <p>Experience: {years_of_experience} years</p>
          <p>Number Of Recipe: {num_recipes}</p>
          <p className="flex gap-3">Total Like:<FaRegThumbsUp></FaRegThumbsUp> {likes}</p>
          <div className="card-actions justify-end">
            <Link to={`chef/${chef.id}`} className="btn btn-primary">View recipe</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chef;
