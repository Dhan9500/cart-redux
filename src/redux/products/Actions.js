import { ADD_PRODUCTS, DECREASE_QTY, INCREASE_QTY } from "./ActionTypes"

export const addProducts=(products)=>{
    return{
        type:ADD_PRODUCTS,
        payload:products
    }
}
export const increaseQTY=(products)=>{
    return{
        type:INCREASE_QTY,
        payload:products
    }
}

export const decreseQTY=(item)=>{
    return{
        type:DECREASE_QTY,
        payload:item
    }
}