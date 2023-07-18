import { combineReducers } from 'redux';

import counterReducer from '../reducers/Reducers';


const rootReducer = combineReducers({

  count: counterReducer,

});


export default rootReducer;;

//*used for combining reducers. 
//*Here, we use combineReducers from Redux to create a root reducer by combining counterReducer.