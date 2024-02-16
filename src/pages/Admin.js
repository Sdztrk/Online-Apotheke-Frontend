import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel,Box } from '@mui/material';
// import { uploadProduct } from './redux/actions/productActions';
import {createProduct} from "../redux/productSlice"

const Admin = () => {
   const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    manufacturer: '',
    pzn: '',
    image: '',
    distributionForm: '',
    packageSize: '',
    illness: '',
    manufacturerCountry: '',
    type: '',
    discount: false,
    activeIngredient: '',
    dosage: '',
    sideEffects: '',
    pregnancyNotification: '',
    price: '',
    expirationDate: '',
    applicationMethod: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, checked, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: name === 'discount' ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
     dispatch(createProduct(formData));
  };

  return (
    <Box sx={{mt:20, px:15}}> 
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="brand"
        label="Brand"
        value={formData.brand}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="manufacturer"
        label="Manufacturer"
        value={formData.manufacturer}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="pzn"
        label="PZN"
        value={formData.pzn}
        onChange={handleChange}
        fullWidth
        required
      />
      <InputLabel htmlFor="image">Image</InputLabel>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          style={{ margin:24 }}
        />
      <FormControl fullWidth>
        <InputLabel>Distribution Form</InputLabel>
        <Select
          name="distributionForm"
          value={formData.distributionForm}
          onChange={handleChange}
          required
        >
          <MenuItem value="Tablet">Tablet</MenuItem>
          <MenuItem value="Liquid">Liquid</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="packageSize"
        label="Package Size"
        value={formData.packageSize}
        onChange={handleChange}
        fullWidth
      />
       <InputLabel htmlFor="illness">Illness</InputLabel>
        <Select
          name="illness"
          value={formData.illness}
          onChange={handleChange}
          required
        >
          <MenuItem value="Rachen">Rachen</MenuItem>
          <MenuItem value="Schlafen">Schlafen</MenuItem>
          <MenuItem value="Stress">Stress</MenuItem>
          <MenuItem value="Herz">Herz</MenuItem>
          <MenuItem value="Magen">Magen</MenuItem>
          <MenuItem value="Schnupfen">Schnupfen</MenuItem>
          <MenuItem value="Pflege">Pflege</MenuItem>
          <MenuItem value="Schmerz">Schmerz</MenuItem>
          <MenuItem value="Husten">Husten</MenuItem>
        </Select>
      <TextField
        name="manufacturerCountry"
        label="Manufacturer Country"
        value={formData.manufacturerCountry}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="type"
        label="Type"
        value={formData.type}
        onChange={handleChange}
        fullWidth
      />
      <FormControlLabel
        control={<Checkbox name="discount" checked={formData.discount} onChange={handleChange} />}
        label="Discount"
      />
      <TextField
        name="activeIngredient"
        label="Active Ingredient"
        value={formData.activeIngredient}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="dosage"
        label="Dosage"
        value={formData.dosage}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="sideEffects"
        label="Side Effects"
        value={formData.sideEffects}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="pregnancyNotification"
        label="Pregnancy Notification"
        value={formData.pregnancyNotification}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="price"
        label="Price"
        value={formData.price}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="expirationDate"
        label="Expiration Date"
        value={formData.expirationDate}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="applicationMethod"
        label="Application Method"
        value={formData.applicationMethod}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        name="description"
        label="Description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Upload Product
      </Button>
    </form>
    </Box>
  );
};

export default Admin;
