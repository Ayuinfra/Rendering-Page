import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

const store = configureStore({
reducer: {
count: counterReducer,
},
});

export default store;