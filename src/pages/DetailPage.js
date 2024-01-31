// DetailPage.js

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductDetailPageCard from '../components/cards/ProductDetailPageCard';

const DetailPage = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  console.log(selectedProduct)


  return (
    <div style={{marginTop:"300px"}}>
      <h1>{selectedProduct ? selectedProduct.name : 'Loading...'}</h1>
      {/* Render other details as needed */}
      {
        
            <ProductDetailPageCard product={selectedProduct}/>
        
      }
    </div>
  );
};

export default DetailPage;
