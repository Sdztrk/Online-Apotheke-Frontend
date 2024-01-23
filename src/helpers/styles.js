import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

//shopping cart badge
 export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  //styling modal
  export const modalStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Updated width to make it responsive
    maxWidth: 350, // Added maxWidth for larger screens
    height: "auto", // Set height to 'auto' for responsive height
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
  export const modalStyleLogin = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Updated width to make it responsive
    maxWidth: 350, // Added maxWidth for larger screens
    minHeight: 320, // Set height to 'auto' for responsive height
    bgcolor: 'background.paper',
    border: '2px solid blue',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };