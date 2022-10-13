import Axios from "axios";
import './App.css';
import React, { useState } from 'react';
import RecipeTile from "./RecipeTile";



function App() {
  const [query, setquery] = useState("");
  const [recipes, setRecipe] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan")

  const YOUR_APP_ID = "2da02cf3";
  const YOUR_APP_KEY = "bba8084a0507c526e6439bf9556df62f";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    getRecipes();
  }

  return (
    <div className='app' >
      <h1 >Food Recipe Plaza  </h1>
      <form className="app_searchForm" onSubmit={onSubmit} >
        <input type="text"
          className="app_input"
          placeholder="Enter Ingredient"
          value={query}
          onChange={(event) => setquery(event.target.value)} />

        <input className="app_submit" type="submit" value="Search" />

        <select className="app_healthLabels">
          <option onClick={() => setHealthLabels("vegan")}>Vegan</option>

          <option onClick={() => setHealthLabels("vegetarian")}>
            vegetarian
          </option>
          <option onClick={() => setHealthLabels("paleo")}>
            paleo
          </option>
          <option onClick={() => setHealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => setHealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => setHealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => setHealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => setHealthLabels("egg-free")}>
            egg-free
          </option>
          <option onClick={() => setHealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => setHealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={() => setHealthLabels("soy-free")}>
            soy-free
          </option>
          <option onClick={() => setHealthLabels("fish-free")}>
            fish-free
          </option>
        </select>
      </form>

     <div className="app_recipes" >
      {recipes.map((recipe)=>{
        return <RecipeTile recipe={recipe} key={recipe["recipe"]["calories"]}  />
      })}
     </div>
    </div>
  );
};

export default App;
