import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducers = combineReducers({
count: counterReducer,
});

export default rootReducers;

//*used for combining reducers. 
//*Here, we use combineReducers from Redux to create a root reducer by combining counterReducer.