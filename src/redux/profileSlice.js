// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

const url = process.env.REACT_APP_API_BASEURL;
// console.log(url)


const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        data:{}
    },
    reducers: {
        profile(state, action) {
            state.data = action.payload.data;
        },
    },
});

export const { profile } = profileSlice.actions;

//profile
export const getProfile = () => async (dispatch) => {
    try {
        const id = sessionStorage.getItem('id') || null;
        const token = sessionStorage.getItem('token') || null;
        // console.log(id,token)
        if (!id && !token) throw new Error('Id or token not found!');


      const res = await axios.get(`${url}/api/v1/users/${id}`,{
        method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
      }});
    //   console.log(res.data)

      const payload = {
        data: res.data
      };
      dispatch(profile(payload));
    } catch (error) {
      console.error(error);
      //toast.error(error.message);
      toast.error("Server error");
    }
  };

  export const uploadProfile = (formData) => async (dispatch) => {
    try {
      const token = sessionStorage.getItem('token');

      const response = await axios.post(`${url}/api/v1/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
  
      if (response.status === 201) {
        // Dispatch the profile action with the updated data
        dispatch(profile({ data: response.data }));
        console.log('New profile with image and address created successfully!');
        // You can dispatch additional actions or perform other actions on success
      } else {
        console.error('Failed to create a new profile');
        // Handle error if profile creation fails
      }
    } catch (error) {
      console.error('Error during profile creation:', error);
      toast.error('Server error');
    }
  };

  export default profileSlice.reducer;
