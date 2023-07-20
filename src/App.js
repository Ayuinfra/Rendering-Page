// App.js
import React from "react";
import { Container, Typography } from "@material-ui/core";
import ProductGrid from "./components/productgrid/ProductGrid";
import store from "./redux/store/Store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";

const theme = createTheme({
    //* Customize your theme here
});

const App = () => {
    return (
        //* Wrap the entire app with the Provider component
        <Container maxWidth='md' sx={{marginTop:'2rem',display:'flexStart'}}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container>
                        <Typography variant="h4" align="center" >
                            Jewellery Collection
                        </Typography>
                        <ProductGrid />
                    </Container>
                </ThemeProvider>
            </Provider>
        </Container>

    );
};

export default App;