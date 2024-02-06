// Import necessary dependencies and components
import React from 'react';
import { Paper, Typography, Card, CardMedia, Box, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const url = process.env.REACT_APP_API_BASEURL;

const ProductDetailPageCard = ({ product }) => {

  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('de-DE', options);

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", }, justifyContent: "space-evenly", alignItems: "center", }} >
      <Paper sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", }, justifyContent: "space-between", alignItems: "center", }}>
        <Box>
          < >
            <CardMedia
              component="img"
              alt={product.name}
              image={`${url}/${product.image}`}
              title={product.name}
              sx={{ objectFit: "contain", maxWidth: "300px" }}
            />
          </>
        </Box>
        <Box>
          {/* Display product details */}
          <Box style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Marke: {product.brand}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hersteller: {product.manufacturer}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Herstellungsland: {product.manufacturerCountry}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Typ: {product.type}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Packungsgröße: {product.packageSize}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Gegen: {product.illness}
            </Typography>
            <Typography variant="body1" gutterBottom>
              PZN: {product.pzn}
            </Typography>
            {/* Add more fields as needed */}
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          minHeight: "200px",
          minWidth: "300px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column", // Added for small screens
        }}
      >
        <Typography variant="body1" gutterBottom>
          Preis: €{product.price}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {formattedDate}
        </Typography>
        <Button
          size="large"
        // onClick={() => handleAddToShoppingCard(product)}
        >
          <AddShoppingCartIcon />
        </Button>
      </Paper>
    </Box>
  );
};

export default ProductDetailPageCard;
