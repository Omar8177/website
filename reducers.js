
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((plant) => plant.id !== action.payload);
    case "INCREASE_QUANTITY":
      return state.map((plant) =>
        plant.id === action.payload
          ? { ...plant, quantity: plant.quantity + 1 }
          : plant
      );
    case "DECREASE_QUANTITY":
      return state.map((plant) =>
        plant.id === action.payload && plant.quantity > 1
          ? { ...plant, quantity: plant.quantity - 1 }
          : plant
      );
    default:
      return state;
  }
};

export default cartReducer;
