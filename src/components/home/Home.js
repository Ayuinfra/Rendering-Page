import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";

const Home = () => {
  const dispatch = useDispatch();

  // Retrieve products, loading, and error states from Redux store
  const { loading, products, error } = useSelector((state) => state.productReducer);

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    // Show loading indicator while products are being fetched
    return <CircularProgress />;
  }

  if (error) {
    // Show error message if products couldn't be fetched
    return <>Error: {error}</>;
  }

  return (
    <>
      <Typography variant="h4" align="center">
        Jewelry Collection
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            {/* Pass product data to the ProductCard component */}
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;