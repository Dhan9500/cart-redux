import { cartInitialState } from "./InitialState";

export const cartReducer = (state = cartInitialState, action) => {
    if (action.type === "ADD_TO_CART") {
        if (state.find((item) => item.id === action.payload.id)) {
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...action.payload, quantity: item.quantity + 1 }
                    : item,
            );
        } else {
            return [...state, { ...action.payload, quantity: 1 }];
        }
    }
    else if(action.type=== "REMOVE_FROM_CART"){
        if (state.find((item) => item.id === action.payload.id)) {
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...action.payload, quantity: item.quantity - 1 }
                    : item,
            );
        } else {
            return [...state]
        }
    }
    return state;
};
