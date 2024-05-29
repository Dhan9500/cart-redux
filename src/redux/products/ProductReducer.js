import { initialState } from "./InitialState";

const productReducer = (state = initialState, action) => {
  const id = state.length - 1;

  if (action.type === "ADD_PRODUCTS") {
    return [...state, { ...action.payload, id: id, offer: "30% Off" }];
  }
  else if (action.type === "INCREASE_QTY") {
    return action.payload.quantity >=0
      ? state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity + 1 }
            : item,
        )
      : state;
  } else if (action.type === "DECREASE_QTY") {
    return action.payload.quantity
      ? state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity - 1 }
            : item,
        )
      : state;
  } else {
    return state;
  }
};
export default productReducer;
