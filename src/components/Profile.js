// ProfilePage.js

import React, { useState } from 'react';

const ProfilePage = () => {
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState('');

  const handleImageChange = (e) => {
    // Access the selected file from the input element
    const selectedImage = e.target.files[0];

    // Convert the selected file to a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the submission logic (e.g., send the data to your server)
    console.log('Image:', image);
    console.log('Address:', address);

    // You can perform additional actions, such as making an API call to save the data
    // For simplicity, we'll just log the values to the console in this example
  };

  return (
    <div>
      <h1>Profile Page</h1>
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

      {/* Display the selected image */}
      {image && (
        <div>
          <h2>Preview</h2>
          <img src={image} alt="User" style={{ maxWidth: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
