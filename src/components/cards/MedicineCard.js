import React, {useEffect} from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {addToShoppingCard,calculateShoppingCardTotals} from "../../redux/shoppingCardSlice";



const url = process.env.REACT_APP_API_BASEURL;
  // console.log(`${url}/${product.image}`)


const MedicineCard = ({ product }) => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card.cartItems);

  const handleAddToShoppingCard = (item)=> {
    dispatch(addToShoppingCard(item))
  }
  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [card, dispatch]);

  return (
    <Box sx={{
      m: `50px`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `center`,
    }}>
      <Card sx={{
        width: `800px`,
        display: "flex",

      }}>
        <CardMedia
          component="img"
          alt={product.name}
          sx={{objectFit:"cover", height:"180px", width:"33%", display:"flex"}}
          image={`${url}/${product.image}`}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Button size="large" onClick={() => handleAddToShoppingCard(product)}>
            In den Warenkorb
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MedicineCard;
