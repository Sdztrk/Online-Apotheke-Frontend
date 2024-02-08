// productSlice.js

// Import necessary libraries and modules
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Retrieve the API base URL from environment variables
const url = process.env.REACT_APP_API_BASEURL;

// Retrieve stored selected product from session storage or set it to null
const storedSelectedProduct = sessionStorage.getItem("selectedProduct");
const initialSelectedProduct = storedSelectedProduct ? JSON.parse(storedSelectedProduct) : null;

// Define the product slice using createSlice from Redux Toolkit
const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],  // Array to store the product data
    selectedProduct: initialSelectedProduct  // Initially set to the stored selected product or null
  },
  reducers: {
    // Redux Toolkit reducer to set the product data in the state
    setProducts(state, action) {
      state.data = action.payload.data;
    },
    // Redux Toolkit reducer to set the selected product in the state
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload.product;
    },
  },
});

// Extracting the action creators from the product slice
export const { setProducts, setSelectedProduct } = productSlice.actions;

// Async action to fetch products from the server using Axios
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/v1/product`);
    const payload = {
      data: res?.data,
    };
    dispatch(setProducts(payload));
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error('Server error');
  }
};

// Async action to fetch a product by ID from the server using Axios
export const getProductById = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/v1/product/${productId}`);
    const payload = {
      product: res.data?.data,
    };
    // Store the selected product in session storage
    sessionStorage.setItem("selectedProduct", JSON.stringify(res.data.data))
    dispatch(setSelectedProduct(payload));
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    toast.error('Server error');
  }
};

// Async action for creating a new product on the server
export const createProduct = (productData) => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');

    const response = await axios.post(`${url}/api/v1/products`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      dispatch(setProducts({ data: response.data }));
      console.log('New product created successfully!');
      // Additional actions or logic on success
    } else {
      console.error('Failed to create a new product');
      // Handle error if product creation fails
    }
  } catch (error) {
    console.error('Error during product creation:', error);
    toast.error('Server error');
  }
};

// Exporting the product reducer
export default productSlice.reducer;
