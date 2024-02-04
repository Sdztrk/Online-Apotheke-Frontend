// DetailPage.js

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductDetailPageCard from '../components/cards/ProductDetailPageCard';

const DetailPage = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  console.log(selectedProduct)

  if (!selectedProduct) {
    return <div>Loading...</div>; // or another loading indicator
  }

  return (
    <div style={{marginTop:"100px"}}>
      <h1>{selectedProduct ? selectedProduct.name : 'Loading...'}</h1>
      {/* Render other details as needed */}
      {
        
            <ProductDetailPageCard product={selectedProduct}/>
        
      }
    </div>
  );
};

export default DetailPage;
