import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Person2Icon from '@mui/icons-material/Person2';
import { useSelector } from 'react-redux';



const SpeedDialTooltipOpen = () => {


  const actions = [
    { icon: <Person2Icon />, name: 'Profile', route: '/Profile' },
    { icon: <ShoppingCartCheckoutIcon />, name: 'Korb', route: '/ShoppingPage' },
  ];


  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleActionClick = (route) => {
    navigate(route); // Navigate to the specified route
    handleClose(); // Close the SpeedDial after clicking an action
  };

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActionClick(action.route)} // Pass the route to handleActionClick
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
export default SpeedDialTooltipOpen;