import React, { } from 'react';
import { Container, Typography, Grid, Link, Box } from '@mui/material';

const Footer = () => {
  const typographySx = { textTransform: 'capitalize', mb: 2 };
  const linkSx = { textDecoration: 'none', mb: 1, maxWidth:"50px"};

  const handleContactClick = () => {
    window.location.href = 'mailto:msaidozturk1@gmail.com';
  };

  const titles = {
    "Über uns": [
      { title: "FAQ", url: "/faq" },
      // Add more links here if needed
    ],
    "Rechtliches": [
      { title: "AGB", url: "#" },
      { title: "Datenschutz", url: "#" },
      // Add more links here if needed
    ],
    "Kontakt": [
      { title: "Kundenservice", url: "#" },
      { title: "Kontaktieren", url: "#" },
      // Add more links here if needed
    ],
    "Zusammenarbeit": [
      { title: "Zahlungsarten", url: "#" },
      { title: "Versandarten", url: "#" },
      // Add more links here if needed
    ],
    // Add more sections with links here if needed
  };



  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', mt: 60 }}>
      <Container component="footer" maxWidth="xl" sx={{ py: 5, bgcolor: 'primary.main' }}>
        <Grid container spacing={2}>
          <Grid container spacing={2}>
            {Object.entries(titles).map(([section, links], index) => (
              <Grid item xs={6} sm={3} key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={typographySx}>
                  {section}
                </Typography>
                {links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.url} color="inherit" sx={linkSx} underline='hover'>
                    {link.title}
                  </Link>
                ))}
              </Grid>
            ))}
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
