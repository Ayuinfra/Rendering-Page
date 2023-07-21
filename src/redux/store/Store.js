import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "../reducers/ProductReducers";
import authReducer from "../reducers/AuthReducer"; // Import your AuthReducer here

const rootReducer = combineReducers({
productReducer,
auth: authReducer, // Combine your AuthReducer under the "auth" key
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;