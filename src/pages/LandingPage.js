import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


const LandingPage = () => {
    const [products, setProducts] = useState([]);


    const URL = "https://online-apotheke-v1-api.onrender.com/api/v1/product"
    const profileUrl ="https://online-apotheke-v1-api.onrender.com/api/v1/profile/65a70eb123fa5527c457bdc6"

    useEffect(() => {
        // Function to fetch products
        const fetchProducts = async () => {
          try {
            const token = Cookies.get("token")
            console.log(token)
            // Replace the URL with the actual endpoint that provides product data
            const response = await fetch(profileUrl,{
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                // Add other headers if needed
              },
            });
            console.log(response)
            const data = await response.json();
            console.log(data.data)
            // Update the state with the fetched products
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        // Call the fetchProducts function when the component mounts
        // fetchProducts();
      }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        Map through the products and render each one
        {products.map((product, index) => (
          <li key={index}>
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LandingPage