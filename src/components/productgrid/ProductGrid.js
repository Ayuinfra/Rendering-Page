// ProductGrid.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/ProductAction";
import { Grid, CircularProgress } from "@material-ui/core";
import ProductCard from "../productcomponents/ProductComponents";

const ProductGrid = () => {
  const dispatch = useDispatch();

  // Access the state from the correct path (productReducer in this case)
  const { loading, products, error } = useSelector((state) => state.productReducer);

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;