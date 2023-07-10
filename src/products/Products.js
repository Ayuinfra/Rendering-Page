import React from 'react';
import { Button, Typography, Container, Card, CardContent } from '@mui/material';

const Products = ({ products, handleLogout }) => (
  <Container maxWidth="md">
    <Button variant="contained" onClick={handleLogout}>
      Logout
    </Button>
    <Typography variant="h4" component="h1" align="center">
      Products
    </Typography>
    {products.map((product) => (
      <Card key={product.id} style={{ marginTop: '1rem' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography>{product.description}</Typography>
        </CardContent>
      </Card>
    ))}
  </Container>
);

export default Products;