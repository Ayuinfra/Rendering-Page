import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import CubeCounter from './components/cubecounter/CubeCounter';
import counterReducer from './store/reducers/Reducers';

const middleware = applyMiddleware(logger);
const store = createStore(counterReducer, middleware);

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

export default App;