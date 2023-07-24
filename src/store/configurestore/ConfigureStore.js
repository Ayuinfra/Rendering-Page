import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/Reducers'

const store = configureStore({
    reducer: {
        count: counterReducer,
    },
});

export default store;