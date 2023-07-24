import React from 'react';
import { Provider } from 'react-redux';
import CubeCounter from "../src/components/cubecounter/CubeCounter"
import { Container } from '@mui/material';
import store from './store/configurestore/ConfigureStore';




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