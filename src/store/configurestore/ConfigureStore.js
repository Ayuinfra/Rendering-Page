import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from '../rootreducer/RootReducer';


const middleware = applyMiddleware(logger);

const store = createStore(rootReducer, middleware);


export default store;


//* we are setting up the Redux store. 
//* We use combineReducers from Redux to combine multiple reducers into a single root reducer.