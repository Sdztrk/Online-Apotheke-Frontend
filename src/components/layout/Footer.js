import React, {  } from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';

const Footer = () => {
  const typographySx = { textTransform: 'capitalize', mb: 2 };
  const linkSx = { textDecoration: 'none', mb: 1 };



  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white',mt:60 }}>
      <Container component="footer" maxWidth="xl" sx={{ py: 5, bgcolor: 'primary.main' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={typographySx}>
              Über uns
            </Typography>
            <Link href="/faq" color="inherit" sx={linkSx}>
              FAQ
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={typographySx}>
              Rechtliches
            </Typography>
            <Link href="#" color="inherit" sx={linkSx}>
              AGB
            </Link>
            <Link href="#" color="inherit" sx={linkSx}>
              Datenschutz
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={typographySx}>
              Kontakt
            </Typography>
            <Link href="#" color="inherit" sx={linkSx}>
              Kundenservice
            </Link>
            <Link href="#" color="inherit" sx={linkSx}>
              Kontaktieren
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={typographySx}>
              Zusammenarbeit
            </Typography>
            <Link href="#" color="inherit" sx={linkSx}>
              Zahlungsarten
            </Link>
            <Link href="#" color="inherit" sx={linkSx}>
              Versandarten
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" sx={typographySx}>
              Unsere Apotheke
            </Typography>
            <iframe
              width="100%" // Adjust width as needed
              height="315"
              src="https://www.youtube.com/embed/hddXvceVv6E"
              title="Apotheke Video"
              allowFullScreen
            />
          </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
