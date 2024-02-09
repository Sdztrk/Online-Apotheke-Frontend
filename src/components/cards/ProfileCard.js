import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { VerticalAlignBottom } from '@mui/icons-material';

// const url = process.env.REACT_APP_API_BASEURL


const ProfileCard = ({ image, name, address, email }) => {
  return (
    <Card>
      {/* <Avatar
        src={`${url}/${image}`}
        alt="Profile"
        sx={{ width: 100, height: 100, borderRadius: '50%', margin: '0 auto' }}
      /> */}
      <Avatar
        src={image}
        alt="Profile"
        sx={{ width: 100, height: 100, borderRadius: '50%', margin: '0 auto' }}
      />
      <CardContent>
        <Typography variant="h5" component="div" textAlign="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {address}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
