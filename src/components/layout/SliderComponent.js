import React from 'react'
import SliderCards from './SliderCards';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$19.99', name: 'Product 1' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  { image: 'https://www.kindernetz.de/wissen/1653920856568%2Cwie-entstehen-berge-106~_v-16x9@2dM_-ad6791ade5eb8b5c935dd377130b903c4b5781d8.jpg', price: '$29.99', name: 'Product 2' },
  // Add more products as needed
];
const CustomPrevArrow = (props) => (
  <div {...props} style={{ ...props.style, left: '-70px', zIndex: 1 }}>
    {/* You can customize the appearance of the left arrow here */}
    <span style={{ color: 'blue', fontSize: '24px' }}>&#9665;</span>
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} style={{ ...props.style, right: '-40px', zIndex: 1 }}>
    {/* You can customize the appearance of the right arrow here */}
    <span style={{ color: 'blue', fontSize: '24px' }}>&#9655;</span>
  </div>
);

const settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
};

const SliderComponent = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div" sx={{ml:40, mt:5}}>
        Im Angebot
      </Typography>
      <Box sx={{  width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>

        <Box sx={{ width: "63%",  }}>

          <Slider {...settings}>
            {products.map((product, index) => (
              <SliderCards key={index} product={product} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default SliderComponent;