import React, { useEffect, useState } from 'react'
import RecipeCard from '../Components/RecipeCard';
import "./Favourites.css";

function Favourites() {
    const [favourites, setFavourites] = useState([]);

    useEffect(()=>{
        const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(storedFavs);
    },[]);

    const removeFavourite = (id) =>{
        const updatedFavs=favourites.filter(item=>item.id !== id);
        setFavourites(updatedFavs);
        localStorage.setItem("favourites",JSON.stringify(updatedFavs));
    }
  return (
    <div className='favourites-container'>
        <h1>Your Favourite Recipes</h1>

        {favourites.length === 0 ? (
            <p>No Favourite recipes yet!</p>
        ) :(
            <div className='recipes-grid'>
                {favourites.map(recipe=>(
                    <div key={recipe.id} className='fav-wrapper'>
                        <RecipeCard recipe={recipe} />
                        <button
                          className='remove-btn'
                          onClick={()=>removeFavourite(recipe.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                </div>
        )}
    </div>
  );
}

export default Favourites;
