import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import CubeCounter from "../src/components/cubecounter/CubeCounter"
import rootReducer from './store/combinereducers/CombineReducers';
import { Container } from '@mui/material';

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, middleware);

const App = () => {
return (
<Provider store={store}>
<Container
maxWidth="md"
sx={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}
>
<h1>Cube Counter App</h1>
<CubeCounter />
</Container>
</Provider>
);
};

export default App;