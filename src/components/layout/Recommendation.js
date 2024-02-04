import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MedicineCard from '../cards/MedicineCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/productSlice";



const Recommendation = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
   console.log(products?.data)

  useEffect(() => {
    // Function to fetch products when the component mounts
    const handleProduct = async () => {
      try {
        await dispatch(getProducts());
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    handleProduct(); // Call the function

    // Optionally, you can provide dependencies to useEffect if needed
    // useEffect(() => {
    //   handleProduct();
    // }, [/*dependencies*/]);

  }, [dispatch]);


  return (
    <Box
      sx={{
        width: '60%',
        paddingTop: '100px',
        display: 'flex',
        flexDirection: 'column',  // Optional: If you want to center vertically in a column
        alignItems: 'center',
        margin: 'auto',  // Optional: To center horizontally
      }}
    >
      <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: "center" }} >
        Unsere Empehlungen Für Sie
      </Typography>
      <Grid container spacing={{ xs: 0, md: 0 }}  >
        {Array.isArray(products?.data) &&
          products?.data.map((product, index) => (
            <MedicineCard key={index} product={product} />
          ))}
      </Grid>
    </Box>
  )
}

export default Recommendation;