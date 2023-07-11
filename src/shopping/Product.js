import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Grid, Card, CardContent, CardMedia, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import axios from 'axios';

const Products = ({ handleLogout }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

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
            <Card onClick={() => handleProductClick(product)}>
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
      <Dialog open={selectedProduct !== null} onClose={handleClose}>
        {selectedProduct && (
          <>
            <DialogTitle>{selectedProduct.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>{selectedProduct.description}</DialogContentText>
              <DialogContentText>Price: ${selectedProduct.price}</DialogContentText>
              <DialogContentText>Category: {selectedProduct.category}</DialogContentText>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Products;