import React, { useEffect, useState } from 'react'
import RecipeCard from '../Components/RecipeCard';
import './Recipes.css'

function Recipes() {
    const [recipes, setRecipes] =useState([]);
    const [search, setSearch] = useState("")
    const [filteredRecipes, setFilteredRecipes] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>{
            setRecipes(data.recipes);
            setFilteredRecipes(data.recipes);
        });
    },[]);


    const handleSubmit=(e)=>{
        e.preventDefault();
        const filtered=recipes.filter((item)=>
        item.name.toLowerCase().startsWith(search.toLowerCase())
        );
        setFilteredRecipes(filtered);
    }

    
  return (
    <div className='recipes-container'>
        <h1>All Recipes</h1>
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Search recipes...'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            <button type='submit'>Search</button>
            </form>
        </div>
        <div className='recipes-grid'>
        
        {filteredRecipes.length===0 ? (
            <h2>Recipe not found!</h2>
        ) : (
        filteredRecipes.map((item)=>(
            <RecipeCard key={item.id} recipe={item} />
            
        ))
        )}
        
        </div>
      
    </div>
  );
}

export default Recipes
