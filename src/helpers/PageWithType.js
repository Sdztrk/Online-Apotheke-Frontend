import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MedicineCard from "../components/cards/MedicineCard";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productSlice';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Typography, Grid, IconButton } from '@mui/material';

const PageWithType = ({ productType="", productIllness=""}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const [visibleProducts, setVisibleProducts] = useState(6);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Ensure products is an array before filtering
  const filteredProducts = productType ? products?.data?.filter(product => product.type === productType) : products?.data?.filter(product => product.illness === productIllness)

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
  };

  return (
    <Box
      sx={{
        width: '60%',
        paddingTop: '100px',
        display: 'flex',
        flexDirection: { xs: 'column' },
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Grid container spacing={{ xs: 0, md: 4 }}  >
        {filteredProducts?.slice(0, visibleProducts).map((product, index) => (
          <MedicineCard key={index} product={product} />
        ))}
      </Grid>
      {visibleProducts < filteredProducts?.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 2 }}>
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, color: "primary" }}>
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

export default PageWithType;
