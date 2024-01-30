import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MedicineCard from '../cards/MedicineCard';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from "../../redux/productSlice";



const Recommendation = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.data);

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
        width: '100%',
        marginTop:"100px",
      }}
    >
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:"center"}} >
        Unsere Empehlungen Für Sie
        </Typography>
        {Array.isArray(products.data) &&
        products.data.map((product, index) => (
          <MedicineCard key={index} product={product} />
        ))}
    </Box>
  )
}

export default Recommendation;