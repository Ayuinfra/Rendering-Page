import React from 'react';
import { Provider } from 'react-redux';
import CubeCounter from './components/cubecounter/CubeCounter';
import { Container } from '@mui/material';
import store from './store/configurestore/ConfigureStore';

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