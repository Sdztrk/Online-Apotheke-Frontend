// Import necessary dependencies and components
import React from 'react';
import { Paper, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const url = process.env.REACT_APP_API_BASEURL;


const ProductDetailPageCard = ({ product }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        {/* Display product image */}
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={`${url}/${product.image}`}
            title={product.name}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Display product details */}
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Brand: {product.brand}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description: {product.description}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Manufacturer: {product.manufacturer}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Manufacturer Country: {product.manufacturerCountry}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Type: {product.type}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Dosage: {product.dosage}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Package Size: {product.packageSize}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Price: ${product.price}
          </Typography>
          {/* Add more fields as needed */}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetailPageCard;
