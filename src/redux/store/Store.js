import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "../reducers/ProductReducers"; 

//* Combine multiple reducers if needed
const rootReducer = combineReducers({
productReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;