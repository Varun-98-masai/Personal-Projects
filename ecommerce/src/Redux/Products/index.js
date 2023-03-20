import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./Products-reducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductReducer,
});

export default reducers