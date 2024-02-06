import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DetailPageAccordion = ({ product }) => {
  const { description, pregnancyNotification, sideEffects, applicationMethod } = product;

  return (
    <Box sx={{ mx: { sx: 0, sm: 10, md: 20, lg:40, xl:60 }, mt:5}}>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="description-content" id="description-header">
          <Typography variant="h6">Beschreibung</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="pregnancyNotification-content" id="pregnancyNotification-header">
          <Typography variant="h6">Schwangerschaftshinweis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{pregnancyNotification}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="sideEffects-content" id="sideEffects-header">
          <Typography variant="h6">Nebenwirkungen</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{sideEffects}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="applicationMethod-content" id="applicationMethod-header">
          <Typography variant="h6">Anwendungsmethode</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{applicationMethod}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default DetailPageAccordion;
