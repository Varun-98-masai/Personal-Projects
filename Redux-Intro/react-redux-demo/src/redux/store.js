 import { createStore ,combineReducers , applyMiddleware } from "redux";
 import cakeReducer from "./cake/cakeReducer";
 import iceCreamReducer from "./iceCream/iceCreamReducer";
 import sweetReducer from "./sweet/sweetReducer";
 import logger from "redux-logger";
 import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user/userReducer";
import thunk from "redux-thunk";
 
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    sweet: sweetReducer,
    user: userReducer,
})
 const store = createStore(
    rootReducer , 
    composeWithDevTools(applyMiddleware(logger , thunk))
    );

 export default store;
 