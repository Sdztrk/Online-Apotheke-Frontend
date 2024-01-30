import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import FAQAccordion from '../components/layout/FAQAccordion';
import { faqs } from "../helpers/constants/Faqs"


const FAQPage = () => {
    return (
        <Container>
            <Box sx={{ mt: 20, overflow: "auto" }}>
                <Typography variant="h3" sx={{ textAlign: "center", mb:2 }}>FAQ Questions</Typography>
                <FAQAccordion faqs={faqs} />
            </Box>
        </Container>
    );
};

export default FAQPage;
