import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const Products = ({ handleLogout }) => {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <Container maxWidth="md">
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
      <Typography variant="h4" component="h1" align="center">
        Products
      </Typography>
      <Grid container spacing={2} style={{ marginTop: '1rem' }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="300" image={product.image} alt={product.title} />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;