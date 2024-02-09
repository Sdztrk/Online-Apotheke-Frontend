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
            token: res.data?.token,
            currentUser: res.data?.name,
            email: res.data?.user?.email,
        };
        dispatch(auth(payload));
        navigate('/');
        toast.success("Erfolgreich registriert");
    } catch (error) {
        console.error(error);
        toast.error(error.message);
    }
};

//login
export const login = (userInfo, navigate) => async (dispatch) => {
    try {
      const res = await axios.post(`${url}/api/v1/auth/login/`, userInfo);
      console.log(res.data)
      if (!res.data) throw new Error('Something went wrong!');

      const { token, name, email,id } = res.data;

      // sessionStorage.setItem('id', res.data.id);
      dispatch(auth({ token, currentUser: name, email }));
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('id', id);
      
      toast.success("Erfolgreich angemeldet");
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
        navigate('/');
        toast.success("Erfolgreich abgemeldet");
        // console.log('User successfully logged out!');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };


export default authSlice.reducer;
