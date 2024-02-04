import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import MedicineCard from "../components/cards/MedicineCard";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import { VerticalAlignBottom } from '@mui/icons-material';





const Medicine = () => {

  const products = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser)
  console.log(currentUser)

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


  // console.log(products)
  return (
    <Box
      sx={{
        width: '100%',
        marginTop: "100px",
      }}
    >
      {Array.isArray(products.data) &&
        products.data.map((product) => (
          product.type === 'Arzneimittel' && (
            <MedicineCard key={product._id} product={product} />
          )
        ))}
    </Box>
  );
};

export default Medicine;
