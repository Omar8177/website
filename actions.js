
export const addToCart = (plant) => ({
  type: "ADD_TO_CART",
  payload: plant,
});

export const removeFromCart = (plantId) => ({
  type: "REMOVE_FROM_CART",
  payload: plantId,
});

export const increaseQuantity = (plantId) => ({
  type: "INCREASE_QUANTITY",
  payload: plantId,
});

export const decreaseQuantity = (plantId) => ({
  type: "DECREASE_QUANTITY",
  payload: plantId,
});
