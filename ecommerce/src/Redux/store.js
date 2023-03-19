import { legacy_createStore } from "redux";
import productReducer from "./Products/Products-reducer";

const store = legacy_createStore(productReducer);

export default store;