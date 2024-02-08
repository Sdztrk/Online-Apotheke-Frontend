// MedicineCard.js

import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/productSlice";
import { addToShoppingCard, calculateShoppingCardTotals } from "../../redux/shoppingCardSlice";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const url = process.env.REACT_APP_API_BASEURL;

const MedicineCard = ({ product }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cartItems);

  const handleDetailsClick = (id) => {
    dispatch(getProductById(id));
  };

  const handleAddToShoppingCard = (item) => {
    dispatch(addToShoppingCard(item));
  };

  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [card, dispatch]);



  return (
    <Grid item xs={12} sm={12} md={6} lg={4} sx={{ marginY: 2 }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: "column" },
          maxWidth: "300px",
          overflow: "hidden",
          '&:hover': {
            '& .MuiCardMedia-root': {
              transform: 'scale(1.2)', // Apply background color to CardMedia when Card is hovered
            },
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
              transition: "transform 0.5s", // Add transition for smooth scaling

            }}
            image={`${url}/${product.image}`}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography sx={{textTransform:"uppercase"}} variant="h6" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.packageSize} mg
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