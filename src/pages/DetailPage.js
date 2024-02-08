// DetailPage.js

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductDetailPageCard from '../components/cards/ProductDetailPageCard';
import { Typography,Box } from '@mui/material';
import DetailPageAccordion from '../components/cards/DetailPageAccordion';

const DetailPage = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) {
    return <div>Loading...</div>; // or another loading indicator
  }

  return (
    <Box sx={{marginTop:"100px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      {/* Render other details as needed */}
      {
            <ProductDetailPageCard product={selectedProduct}/>
      }
      {
        <DetailPageAccordion product={selectedProduct}/>
      }
    </Box>
  );
};

export default DetailPage;
