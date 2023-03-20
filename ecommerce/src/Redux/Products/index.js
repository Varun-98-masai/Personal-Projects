import { combineReducers } from "redux";
import { productReducer } from "./Products-reducer";

const reducers = combineReducers({
    allProducts : productReducer
});

export default reducers