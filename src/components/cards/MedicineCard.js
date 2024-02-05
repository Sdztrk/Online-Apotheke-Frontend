// MedicineCard.js

import React, { useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/productSlice";
import { addToShoppingCard, calculateShoppingCardTotals } from "../../redux/shoppingCardSlice";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




const url = process.env.REACT_APP_API_BASEURL;

const MedicineCard = ({ product }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cartItems);
  const theme = useTheme();

  const handleDetailsClick = (productId) => {
    dispatch(getProductById(productId));
  };

  const handleAddToShoppingCard = (item) => {
    dispatch(addToShoppingCard(item));
  };

  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [card, dispatch]);



  return (
    <Grid item sm={12} md={6} lg={4} sx={{ marginY: 2 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: "column" },
          maxWidth: "300px",
          '&:hover': {
            boxShadow: '0px 0px 10px 3px rgba(25, 118, 210, 1)', // Adjust the color and values as needed
        },
        }}
      >
        <Link
          to={`/product/${product._id}`}
          onClick={() => handleDetailsClick(product._id)}
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <CardMedia
            component="img"
            alt={product.name}
            sx={{
              objectFit: "contain",
              maxHeight: "200px",
              transition: "transform 0.3s", // Add transition for smooth scaling
              '&:hover': {
                transform: "scale(1.1)", // Scale to 1.1 on hover
              },
            }}
            image={`${url}/${product.image}`}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.packageSize}
            </Typography>
            {/* ... (other buttons or actions) */}
          </CardContent>
          <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography> €{product.price} </Typography>
          </CardContent>
        </Link>
        <Button size="large" onClick={() => handleAddToShoppingCard(product)}>
          <AddShoppingCartIcon />
        </Button>
      </Card>
    </Grid>


  );
};

export default MedicineCard;