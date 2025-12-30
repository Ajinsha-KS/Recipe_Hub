import React, { useEffect, useState } from 'react';
import './RecipeCard.css';
import { useNavigate } from 'react-router-dom';

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  // Check if already in favourites on load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = stored.some(item => item.id === recipe.id);
    setIsFavourite(exists);
  }, [recipe.id]);

  const addToFavourites = (e) => {
    e.stopPropagation();

    if (isFavourite) {
      setMessage("Already in favourites ⚠️");
    } else {
      const stored = JSON.parse(localStorage.getItem("favourites")) || [];
      stored.push(recipe);
      localStorage.setItem("favourites", JSON.stringify(stored));

      setIsFavourite(true);
      setMessage("Added to favourites ❤️");
    }

    // Auto-hide toast
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <>
      <div
        className="card"
        onClick={() => navigate(`/recipes/${recipe.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <p>{recipe.cuisine}</p>

        <button
          className="fav-btn"
          onClick={addToFavourites}
          disabled={isFavourite}
        >
          {isFavourite ? "Added ❤️" : "Add to Favourites"}
        </button>
      </div>

      {/* Toast Alert */}
      {message && <div className="toast-alert">{message}</div>}
    </>
  );
}

export default RecipeCard;
