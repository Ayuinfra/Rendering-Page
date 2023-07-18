import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import counterReducer from '../reducers/Reducers';

const rootReducer = combineReducers({
count: counterReducer,
});

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);

export default store;


//* we are setting up the Redux store. 
//* We use combineReducers from Redux to combine multiple reducers into a single root reducer.