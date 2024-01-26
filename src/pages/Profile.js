// ProfilePage.js

import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/profileSlice';

const ProfilePage = () => {
  const [img, setImg] = useState(null);
  const [address, setAddress] = useState('');

  //getting user profile

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.profile.data);
  // console.log(userData)
  //function to get users profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      await dispatch(getProfile());

    };
    // Call the function to fetch user profile when the component mounts
    fetchUserProfile();
  }, [])





  const url = process.env.REACT_APP_API_BASEURL
   console.log(`${url}/api/v1/profile`)

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
      console.log(formData)

      // Make a POST request to create a new profile
      const response = await fetch(`${url}/api/v1/profile`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response)
      console.log(response.status);
console.log(response.statusText);

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
    <div>
      <h1>Mein Profile</h1>
      <ProfileCard
        image={userData?.profile?.image}
        name={userData?.data?.name}
        address={userData?.profile?.address}
        email={userData?.data?.email}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter address"
            />
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>

    </div>
  );
};

export default ProfilePage;
