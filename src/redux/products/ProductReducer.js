import { initialState } from "./InitialState";

const productReducer=(state=initialState,action)=>{
    if(action.type==='ADD_PRODUCTS'){
        return[...state,{...action.payload}]
    }
    return state;
}
export default productReducer;