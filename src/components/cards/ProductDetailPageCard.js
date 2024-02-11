// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import { Paper, Typography, CardMedia, Box, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToShoppingCard, calculateShoppingCardTotals } from "../../redux/shoppingCardSlice";
import { useDispatch, useSelector } from "react-redux";

// Base URL for the API
const url = process.env.REACT_APP_API_BASEURL;

// Component for displaying product details on the product detail page
const ProductDetailPageCard = ({ product }) => {
  // Get current date
  const currentDate = new Date();
  // Format options for date
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  // Format date using the options
  const formattedDate = currentDate.toLocaleDateString('de-DE', options);

  // Redux: Dispatch and selector hooks
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.cartItems);

  // State for modal
  const [openModal, setOpenModal] = useState(false);

  // Handler function for opening modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Handler function for closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Handler function for adding item to shopping cart
  const handleAddToShoppingCard = (item) => {
    dispatch(addToShoppingCard(item));
  };

  // useEffect hook for calculating shopping card totals when card or dispatch changes
  useEffect(() => {
    dispatch(calculateShoppingCardTotals());
  }, [card, dispatch]);

  // Render product detail card
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {/* Product details */}
      <Paper
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            alt={product.name}
            image={`${url}/${product.image}`}
            title={product.name}
            sx={{ objectFit: "contain", maxWidth: "300px", cursor: "pointer" }}
            onClick={() => handleOpenModal()}
          />
        </Box>
        <Box>
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
          </Box>
        </Box>
      </Paper>
      {/* Price and Add to Cart */}
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
          onClick={() => handleAddToShoppingCard(product)}
        >
          <AddShoppingCartIcon />
        </Button>
      </Paper>
      {/* Modal for enlarged image */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="enlarged-image-modal"
        aria-describedby="enlarged-image-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height:"70%",
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box sx={{
            position: 'absolute',
            top: '1%',
            right: '1%',
          }}>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <CardMedia
            component="img"
            alt={product.name}
            image={`${url}/${product.image}`}
            title={product.name}
            sx={{
              objectFit: "contain",
              width: '90%', // Set image width to fill modal
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductDetailPageCard;
