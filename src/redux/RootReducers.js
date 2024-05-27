import {combineReducers} from 'redux';
import productReducer from "./products/ProductReducer";
import { cartReducer } from './cart/CartReducer';

const rootReducer=combineReducers({products:productReducer,cart:cartReducer})

export default rootReducer;