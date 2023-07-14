import React from 'react';
import { Provider } from 'react-redux';
import {  legacy_createStore as createStore } from 'redux';
import CubeCounter from './cubecounter/CubeCounter';
import counterReducer from './store/reducers/Reducers';

const store = createStore(counterReducer);

const App = () => {
  return (
    <Provider store={store}>
      <>
        <h1>Cube Counter App</h1>
        <CubeCounter />
      </>
    </Provider>
  );
};

export default App