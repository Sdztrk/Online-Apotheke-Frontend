import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';


const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(15),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 100,
  marginBottom: theme.spacing(2),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));


const NotAuthorizedPage = () => {
  return (
    <StyledContainer component="main" maxWidth="xs">
      <StyledIcon />
      <StyledText variant="h5">
        Sie haben keine Berechtigung, diese Seite anzusehen.
      </StyledText>
      <StyledText>
        Bitte melden Sie sich an.
      </StyledText>

    </StyledContainer>
  )
}

export default NotAuthorizedPage