import { combineReducers } from 'redux';
import counterReducer from "../reducers/Reducers"

const rootReducer = combineReducers({
count: counterReducer,
});

export default rootReducer;