import React from 'react';

const ShoppingPage = () => {
  // Retrieve the product data from sessionStorage
  const shoppingCardItems = JSON.parse(sessionStorage.getItem('shoppingCard')) || [];

  return (
    <div style={{ marginTop: "300px" }}>
      <h2>Checkout</h2>
      {shoppingCardItems.map((product, index) => (
        <div key={index}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          {/* Add other product information as needed */}
        </div>
      ))}
    </div>
  );
};

export default ShoppingPage;
