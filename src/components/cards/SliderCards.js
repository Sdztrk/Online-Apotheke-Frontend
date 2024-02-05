import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToShoppingCard } from '../../redux/shoppingCardSlice';
import { getProductById } from '../../redux/productSlice';

const url = process.env.REACT_APP_API_BASEURL;

const SliderCards = ({ product }) => {
    const dispatch = useDispatch();
    const { _id, image, price, name } = product;

    const handleAddToShoppingCart = () => {
        dispatch(addToShoppingCard(product));
    };

    const handleDetailsClick = (productId) => {
        dispatch(getProductById(productId));
    };

    return (
        <Card
            sx={{
                zIndex: 100,
                maxWidth: 345,
                m: 2,
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.3s, box-shadow 0.3s', // Added box-shadow to the transition
                '&:hover': {
                    boxShadow: '0px 0px 10px 3px rgba(25, 118, 210, 1)', // Adjust the color and values as needed
                },
                textAlign:"center"
            }}
        >
            <Link
                to={`/product/${product._id}`} 
                onClick={() => handleDetailsClick(product._id)}
                style={{ textDecoration: 'none', width: '100%' }}
            >
                <CardMedia component="img" alt={name} height="200" image={`${url}/${image}`} sx={{objectFit:"contain"}} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textTransform:"uppercase", fontSize:"1rem"}}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        € {price}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions sx={{ width: '100%' }}>
                <Button onClick={handleAddToShoppingCart} sx={{  width: '100%' }} size="small">
                    In den Warenkorb
                </Button>
            </CardActions>
        </Card>
    );
};

export default SliderCards;
