// MedicineCard.js

import React, {useEffect} from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/productSlice";
import {addToShoppingCard,calculateShoppingCardTotals} from "../../redux/shoppingCardSlice";
import { Link } from "react-router-dom";

const url = process.env.REACT_APP_API_BASEURL;

const MedicineCard = ({ product }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cartItems);


  const handleDetailsClick = (productId) => {
    dispatch(getProductById(productId));
  };
  
  const handleAddToShoppingCard = (item)=> {
    dispatch(addToShoppingCard(item))
  }
  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [card, dispatch]);

  return (
    <Box
      sx={{
        m: `50px`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
      }}
    >
      <Card
        sx={{
          width: `400px`,
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          sx={{ objectFit: "cover", height: "180px", width: "33%", display: "flex", justifyContent: "center", alignItems: "center" }}
          image={`${url}/${product.image}`}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Button size="large" component={Link} to={`/product/${product._id}`} onClick={() => handleDetailsClick(product._id)}>
            Details ansehen
          </Button>
          <Button size="large" onClick={() => handleAddToShoppingCard(product)}>
            In den Warenkorb
          </Button>
          {/* ... (other buttons or actions) */}
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography> €{product.price} </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MedicineCard;
