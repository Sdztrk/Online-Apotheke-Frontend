import React, {useEffect} from 'react';
import SliderCards from '../cards/SliderCards';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../redux/productSlice";
import "./slick.css"

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
};

const SliderComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  useEffect(() => {
    // Function to fetch products when the component mounts
    dispatch(getProducts());
  }, [dispatch]);

  // Check if products?.data is available before rendering
  if (!Array.isArray(products?.data)) {
    return null; // or you can render a loading indicator or an empty state
  }

  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div" sx={{ mt: 5, textAlign: "center" }}>
        Im Angebot
      </Typography>
      <Box sx={{ width: "100%",  display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Box sx={{ width: "63%" }}>
          <Slider {...settings}>
            {products?.data?.filter((product) => product.discount === true).map((product, index) => (
              <SliderCards key={index} product={product} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderComponent;