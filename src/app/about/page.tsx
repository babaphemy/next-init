import { Container, Grid2, Typography } from '@mui/material';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={4}>
        <Grid2 size={8}>
          <Typography variant="h2">About Us</Typography>
          <Typography variant="body1" mb={2}>
            We are a team of professionals with a passion for education. Our
            goal is to empower individuals to achieve their full potential
            through learning.
          </Typography>
          <Typography variant="body1">
            We are dedicated to making high-quality learning accessible to all,
            regardless of their background or location.
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Image
            src={'/images/about.png'}
            width={400}
            height={300}
            alt="About Us"
            style={{ borderRadius: 10 }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};
export default About;
