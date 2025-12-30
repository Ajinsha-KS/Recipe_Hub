import React from "react";
import "./IngredientsGuide.css";
import tomato from '../Assets/tomato.jpg'
import garlic from '../Assets/garlic.jpg'
import leaves from '../Assets/leaves.jpg'
import onion from '../Assets/onion.jpg'
import turmeric from '../Assets/turmeric.jpg'
import butter from '../Assets/butter.jpg'
import ginger from '../Assets/ginger.jpg'
import coriander from '../Assets/coriander.jpg'

function IngredientsGuide() {
  const ingredients = [
    {
      name: "Tomato",
      image: tomato,
      description: "A juicy red fruit used in curries, salads, sauces, and soups.",
      storage: "Store at room temperature. Refrigerate only when fully ripe.",
      usage: "Used in gravies, pasta, salads, chutneys."
    },
    {
      name: "Onion",
      image: onion,
      description: "A strong-flavoured vegetable used as the base for many dishes.",
      storage: "Store in a cool, dry place with ventilation.",
      usage: "Used in sautéing, curries, pickles, and fried toppings."
    },
    {
      name: "Garlic",
      image: garlic,
      description: "A fragrant ingredient that adds deep flavour to dishes.",
      storage: "Keep in a dry, ventilated area. Do not refrigerate unpeeled garlic.",
      usage: "Used in stir-fry, curry base, soups, sauces."
    },
    {
      name: "Butter",
      image: butter,
      description: "A dairy fat used for richness.",
      storage: "Store in refrigerator. Can be frozen for long-term use.",
      usage: "Used in baking, sautéing, bread spreads."
    },
    {
      name: "Turmeric",
      image: turmeric,
      description: "A bright yellow spice with anti-inflammatory properties.",
      storage: "Store in an airtight container away from sunlight.",
      usage: "Used in curries, rice dishes, marination."
    },
    {
      name: "Basil Leaves",
      image: leaves,
      description: "A fragrant herb used in Italian and Thai recipes.",
      storage: "Wrap in tissue & refrigerate. Use within 4–5 days.",
      usage: "Used in pasta, soups, salads, tea."
    },
    {
    name: "Ginger",
    image: ginger,
    description: "A fragrant root used to add heat and freshness to dishes.",
    storage: "Refrigerate in an airtight container or store in a cool dry place.",
    usage: "Used in tea, curries, marinades, soups, and stir-fries."
    },
    {
    name: "Coriander Leaves",
    image: coriander,
    description: "A fresh herb that adds aroma and garnishing to many dishes.",
    storage: "Refrigerate wrapped in tissue inside a perforated container.",
    usage: "Used in chutneys, salads, curries, garnishing, and soups."
    }

  ];

  return (
    <div className="ingredients-container">
      <h1>Ingredients Guide</h1>
      <p>Learn about common cooking ingredients, how to store them, and how to use them!</p>

      <div className="ingredients-grid">
        {ingredients.map((item, index) => (
          <div className="ingredient-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>

            <h4>Description</h4>
            <p>{item.description}</p>

            <h4>Storage</h4>
            <p>{item.storage}</p>

            <h4>Usage</h4>
            <p>{item.usage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientsGuide;
