import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { categories } from "../helpers/constants/categoriesConstants";
import ComplaintCards from '../components/cards/ComplaintCards';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import SliderComponent from '../components/layout/SliderComponent';
import Recommendation from '../components/layout/Recommendation';

const LandingPage = () => {
  // Use a breakpoint value to determine when to render the SliderComponent
  const breakpoint = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <>
      <Box sx={{mt:15}}>
        <Typography gutterBottom variant="h4" component="div" sx={{textAlign:"center"}} >
          Wo drückt's?
        </Typography>
        <Grid container sx={{ px: { xs: 0, md: 20, lg: 30, xl: 40 } }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {categories.map((category, index) => (
            <ComplaintCards key={index} category={category} />
          ))}
        </Grid>
        {/* This is the discount slider */}
        {breakpoint && <SliderComponent />}
        {/* These are the products from our recommedations */}
        <Recommendation/>
      </Box>
    </>
  );
};

export default LandingPage;
