'use client';
import { Container, Grid2 as Grid } from '@mui/material';
import ContactForm from '../components/contact/ContactForm';
import Gmap from '../components/contact/Gmap';
import { AppData } from '../data';

const ContactPage: React.FC = () => {
  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(AppData.address)}`,
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <ContactForm handleDirections={handleDirections} />
        <Gmap handleDirections={handleDirections} />
      </Grid>
    </Container>
  );
};

export default ContactPage;
