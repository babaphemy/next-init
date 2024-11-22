import { Container, Grid2 } from '@mui/material';
import ContactForm from '../components/contact/ContactForm';
import Gmap from '../components/contact/Gmap';

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <Gmap />
        </Grid2>
        <Grid2 size={4}>
          <ContactForm />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ContactPage;
