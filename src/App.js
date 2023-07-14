import React from 'react';

import { legacy_createStore as createStore } from 'redux';
import CubeCounter from './components/cubecounter/CubeCounter';
import counterReducer from './store/reducers/Reducers';
import { Provider } from 'react-redux';


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

export default App;