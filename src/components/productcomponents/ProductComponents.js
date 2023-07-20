import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const ProductCard = ({ product }) => {
return (
<Card>
<CardActionArea>

{/* Display product image */}
<CardMedia component="img" height="140" image={product.image} alt={product.title} />
<CardContent>

{/* Display product title */}
<Typography gutterBottom variant="h6" component="h2">
{product.title}
</Typography>

{/* Display product description */}
<Typography variant="body2" color="textSecondary" component="p">
{product.description}
</Typography>
</CardContent>
</CardActionArea>
</Card>
);
};

export default ProductCard;