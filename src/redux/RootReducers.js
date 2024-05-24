import {combineReducers} from 'redux';
import productReducer from "./products/ProductReducer";

const rootReducer=combineReducers({products:productReducer})

export default rootReducer;