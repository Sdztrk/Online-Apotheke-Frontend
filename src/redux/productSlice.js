// productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = process.env.REACT_APP_API_BASEURL;

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload.data;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/api/v1/product`);
    const payload = {
      data: res.data,
    };
    dispatch(setProducts(payload));
  } catch (error) {
    console.error('Error fetching products:', error);
    toast.error('Server error');
  }
};

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

// Additional actions or async operations related to products can be added here

export default productSlice.reducer;
