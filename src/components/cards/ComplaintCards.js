import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';


const ComplaintCards = ({ category }) => {
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Link style={{ textDecoration: "none" }} to={category.href}>
        <Card
          sx={{
            transition: "transform 0.3s",
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0px 0px 10px 3px rgba(25, 118, 210, 1)',
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              // Use category.image here
              image={category.image}
              alt={category.complaint}
            />
            <CardContent>
              <Typography underline="none" gutterBottom variant="h5" component="div">
                {/* Use category.complaint here */}
                {category.complaint}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
export default ComplaintCards;