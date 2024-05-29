import { ADD_PRODUCTS, DECREASE_QTY, INCREASE_QTY } from "./ActionTypes"

export const addProducts=(products)=>{
    return{
        type:ADD_PRODUCTS,
        payload:products
    }
}
export const increaseQTY=(item)=>{
    return{
        type:INCREASE_QTY,
        payload:item
    }
}

export const decreseQTY=(item)=>{
    return{
        type:DECREASE_QTY,
        payload:item
    }
}