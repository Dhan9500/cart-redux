import { cartInitialState } from "./InitialState";

export const cartReducer=(state=cartInitialState,action)=>{
    if(action.type==='ADD_TO_CART'){
        
        return[
            ...state,{...action.payload}
        ]
    }
    return state;
}