import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleRecipe.css'

function SingleRecipe() {
    const {id} =useParams();
    const [recipe,setRecipe]=useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/${id}`)
        .then((res)=>res.json())
        .then(data=>{
            setRecipe(data);
            setLoading(false)
        })
    },[id]);

    if (loading) return (
    <div className="loading">
        <div className="spinner"></div>
        <p>Loading recipe...</p>
    </div>
);
    if (!recipe) return <h2>Recipe not found!</h2>
  return (
    <div className='recipe-details'>
        <img src={recipe.image} alt={recipe.name} />

        <h1>{recipe.name}</h1>
        <div className='basic-details'>
        <p><strong>Cuisine : </strong>{recipe.cuisine}</p>
        <p><strong>Meal Type : </strong>{recipe.mealType}</p>
        <p><strong>Preparation Time : </strong>{recipe.prepTimeMinutes}</p>
        <p><strong>Cooking Time : </strong>{recipe.cookTimeMinutes}</p>
        </div>
        <div className='main-details'>
        <div className='ing'>
        <h3>Ingredients</h3>
        <ol>
            {recipe.ingredients.map((ingredient, index)=>
            <li key={index}>{ingredient}</li>
            )}
        </ol>
        </div>

        <div className='inst'>
        <h3>Instructions</h3>
        <ol>
            {recipe.instructions.map((step,index)=>
            <li key={index}>{step}</li>
            )}
        </ol>
        </div>
        </div>
    </div>
  )
}

export default SingleRecipe
