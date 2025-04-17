
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions";

const plants = [
  { id: 1, name: "Aloe Vera", price: 15, image: "aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 20, image: "snake_plant.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", price: 30, image: "fiddle_leaf.jpg" },
  // Add 3 more plants
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
