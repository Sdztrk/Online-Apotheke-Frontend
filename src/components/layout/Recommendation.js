import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import MedicineCard from '../cards/MedicineCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/productSlice";
import { KeyboardArrowDown } from '@mui/icons-material';


const Recommendation = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const [visibleProducts, setVisibleProducts] = useState(6);

  const cheapProducts = products?.data?.filter((product) => product.price < 20)

  useEffect(() => {
    // Function to fetch products when the component mounts
    dispatch(getProducts());
  }, [dispatch]);

  const handleLoadMore = () => {
    // Increment the visibleProducts by 6 when the "Load More" button is clicked
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  return (
    <Box
      sx={{
        width: '60%',
        paddingTop: '100px',
        display: 'flex',
        flexDirection: {xs: 'column'},
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: "center" }} >
        Unsere Empfehlungen Für Sie
      </Typography>
      <Grid container spacing={{ xs: 0, md: 4 }}  >
        {Array.isArray(cheapProducts) &&
          cheapProducts.slice(0, visibleProducts).map((product, index) => (
            <MedicineCard key={index} product={product} />
          ))}
      </Grid>
      {visibleProducts < (cheapProducts?.length || 0) && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 2 }}>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, color:"primary" }}>
            Weitere Produkte Laden
          </Typography>
          <IconButton onClick={handleLoadMore} color="primary" >
            <KeyboardArrowDown />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Recommendation;
