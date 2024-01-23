// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

const url = process.env.REACT_APP_API_BASEURL;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: sessionStorage.getItem('name'),
        token: sessionStorage.getItem('token'),
        email: '',
    },
    reducers: {
        auth(state, action) {
            state.token = action.payload.token;
            state.currentUser = action.payload.name;
            state.email = action.payload.email;
        },
    },
});

export const { auth } = authSlice.actions;

//register
export const register = (userInfo, navigate) => async (dispatch) => {
    try {
        const res = await axios.post(`${url}/api/v1/auth/register/`, userInfo);
        if (!res.data) throw new Error('Something went wrong!');
        const payload = {
            token: res.data.token,
            currentUser: res.data.name,
            email: res.data?.user?.email,
        };
        dispatch(auth(payload));
        navigate('/login');
        toast.success("User registered successfully");
        // console.log("User registered successfully")
    } catch (error) {
        console.error(error);
        toast.error(error.message);
    }
};

//login
export const login = (userInfo, navigate) => async (dispatch) => {
    try {
      const res = await axios.post(`${url}/api/v1/auth/login/`, userInfo);
      if (!res.data) throw new Error('Something went wrong!');
      const payload = {
        token: res.data.token,
        currentUser: res.data.name,
        email: res.data?.user?.email,
      };
      sessionStorage.setItem('name', res.data.name);
      sessionStorage.setItem('token', res.data.token);
      sessionStorage.setItem('email', res.data.email);
      dispatch(auth(payload));
      navigate('/'); 
    //   console.log('User logged in successfully');
      toast.success("User loggedin successfully");
      console.log(res.data.name)
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  //logout
  export const logout = (navigate) => async (dispatch) => {
    try {
      const res = await axios.post(`${url}/api/v1/auth/logout/`);
      if (res.status === 200) {
        dispatch(auth({ token: null, currentUser: false, email: '' }));
        sessionStorage.clear();
        navigate('/login');
        toast.success("User successfully Logged out!");
        // console.log('User successfully logged out!');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };


export default authSlice.reducer;
