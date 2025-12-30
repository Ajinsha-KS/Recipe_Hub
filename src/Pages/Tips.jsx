import React from 'react'
import './Tips.css'

function Tips() {
    const tips = [
    {
      title: "Keep Herbs Fresh",
      description: "Wrap fresh herbs in a damp paper towel before refrigerating to keep them fresh longer."
    },
    {
      title: "Prevent Pasta From Sticking",
      description: "Stir the pasta during the first 2 minutes of cooking. That's when sticking happens."
    },
    {
      title: "Revive Stale Bread",
      description: "Sprinkle some water and heat in the oven for 5 minutes. It becomes fresh again!"
    },
    {
      title: "Cut Onions Without Tears",
      description: "Chill the onion in the refrigerator before cutting. It reduces irritation."
    },
    {
      title: "Thicken Gravies Quickly",
      description: "Mix 1 spoon of cornflour with water and add slowly while stirring."
    },
    {
      title: "Use Lemon to Remove Odor",
      description: "Rub lemon on cutting boards or hands to remove strong smells like garlic or fish."
    },
    {
        title: "Keep Tomatoes Fresh Longer",
        description: "Store tomatoes upside down to prevent air from entering and drying them."
    },
    {
        title: "Reduce Excess Salt",
        description: "Put a peeled potato into your dish, it absorbs extra salt."
    },
    {
        title:"Stop Milk From Boiling Over",
        description: "Place a wooden spoon across the top of the pot, it prevents overflow."
    }
  ];
  return (
    <div className="tips-container">
      <h2 className="tips-title">Cooking Tips & Tricks</h2>
      <div className="tips-list">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tips
