import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipe = () => {
    const recipe = useLoaderData()
    console.log(recipe)
    const{recipes} = recipe
    return (
        <div>
        </div>
    );
};

export default ViewRecipe;