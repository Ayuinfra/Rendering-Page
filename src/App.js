import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import CubeCounter from './components/cubecounter/CubeCounter';
import rootReducers from './store/reducers/Reducers';
import { Container } from '@mui/system';
import store from '../src/store/configurestore/ConfigureStore';

// const middleware = applyMiddleware(logger);
// const store = createStore(rootReducers, middleware);

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart', marginRight: '10px' }}>
        <>
          <h1>Cube Counter App</h1>
          <CubeCounter />
        </>
      </Container>
    </Provider>
  );
};

export default App;