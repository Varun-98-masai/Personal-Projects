import {legacy_createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
export default legacy_createStore(reducers , applyMiddleware(thunk));