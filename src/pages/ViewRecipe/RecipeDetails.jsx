import React from 'react';

const RecipeDetails = ({recipe}) => {
    const{name,cooking_method,rating,ingredients,_pic}=recipe
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='img-fluid' src={_pic} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>
        {
            ingredients.map(int => <li>{int}</li>)
        }
    </p>
    <p><span className='font-semibold'>Cooking Method:</span> {cooking_method}</p>
    <p><span className='font-semibold'>Ratings:</span>{rating}</p>
    <div className="card-actions justify-end">
      <div className="btn text-green-600 badge badge-outline">Favourite</div>
    </div>
  </div>
</div>
    );
};

export default RecipeDetails;