import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SliderCards = ({ product }) => {
    const { image, price, name } = product;

    return (
        <Card sx={{ maxWidth: 345, m: 2, overflow: 'hidden', position: 'relative', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
            <Link style={{ textDecoration: "none", width: "100%" }} to="./detail">
                <CardMedia
                    component="img"
                    alt={name}
                    height="200"
                    // Use the image prop here
                    image={image}
                   
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {/* Use the name prop here */}
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {/* You can use the price prop here */}
                        Price: {price}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions sx={{ textAlign: "center", width: "100%" }}>
                <Button href='./warenkorb' sx={{ textAlign: "center", width: "100%" }} size="small">In den Warenkorb</Button>
            </CardActions>
        </Card>
    );
};

export default SliderCards;