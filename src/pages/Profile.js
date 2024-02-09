// ProfilePage.js

import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/profileSlice';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import axios from 'axios';

const ProfilePage = () => {
  const [img, setImg] = useState(null);
  const [address, setAddress] = useState('');

  //getting user profile

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.profile.data);
  //function to get users profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      await dispatch(getProfile());

    };
    // Call the function to fetch user profile when the component mounts
    fetchUserProfile();
  }, [])





  const url = process.env.REACT_APP_API_BASEURL


  const handleRefresh = () => {
    window.location.reload(true);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the data to be sent to the server
      const formData = new FormData();
      formData.append('image', img);
      formData.append('address', address);

      // Replace 'your_token_here' with your actual Bearer token
      const token = sessionStorage.getItem("token")
      console.log(token)


      // Make a POST request to create a new profile
      const response = await axios.post(`${url}/api/v1/profile`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response)
      console.log(response.status);
      console.log(response.statusText);
      handleRefresh()

      // if (response.ok) {
      //   console.log('New profile with image and address created successfully!');
      //   // You can perform additional actions after successful profile creation
      // } else {
      //   console.error('Failed to create a new profile');
      //   // Handle error if the profile creation fails
      // }
    } catch (error) {
      console.error('Error during profile creation:', error);
    }
  };

  return (
    <Box sx={{ marginTop: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h5">Mein Profile</Typography>
      <ProfileCard
        image={userData?.profile?.image}
        name={userData?.data?.name}
        address={userData?.profile?.address}
        email={userData?.data?.email}
      />
      <FormControl component="form" onSubmit={handleSubmit}>
        <Box>
          <label htmlFor="upload-image">
            Upload Image:
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </Box>
        <Box>
          <TextField
            label="Address"
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter address"
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default ProfilePage;
