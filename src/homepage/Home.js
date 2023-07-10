import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
  };

  return (
    <Container maxWidth="md" sx={{marginTop:'2rem' ,display : "flexStart"}}>
      {!selectedProduct ? (
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card onClick={() => handleProductClick(product)}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}$
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={selectedProduct.image}
            alt={selectedProduct.title}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {selectedProduct.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedProduct.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedProduct.price}$
            </Typography>
            <button onClick={handleBackClick}>Back</button>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Home;