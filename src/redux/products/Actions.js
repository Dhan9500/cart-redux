import { ADD_PRODUCTS } from "./ActionTypes"

export const addProducts=(products)=>{
    return{
        type:ADD_PRODUCTS,
        payload:products
    }
}