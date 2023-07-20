// App.js
import React from "react";
import { Container, Typography } from "@material-ui/core";
import ProductGrid from "./components/productgrid/ProductGrid";
import store from "./redux/store/Store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";

const theme = createTheme({
    // Customize your theme here
});

const App = () => {
    return (
        // Wrap the entire app with the Provider component
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Jewellery Collection
                    </Typography>
                    {/* Render the ProductGrid component */}
                    <ProductGrid />
                </Container>
            </ThemeProvider>
        </Provider>
    );
};

export default App;