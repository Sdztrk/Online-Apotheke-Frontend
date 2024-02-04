import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { clearShoppingCard } from '../redux/shoppingCardSlice';  // Update the path

// Define styles using styled
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(15),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledIcon = styled(CheckCircleIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  fontSize: 100,
  marginBottom: theme.spacing(2),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: 20,

}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

// SuccessfulPayment component
const SuccessfulPayment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear shopping cart on component mount
    dispatch(clearShoppingCard());
  }, []);

  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledIcon />
      <StyledText variant="h5">
        Vielen Dank! Die Zahlung war erfolgreich.
      </StyledText>
      <StyledButton
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        Zurück zum Einkaufen
      </StyledButton>
    </StyledContainer>
  );
};

export default SuccessfulPayment;
