import { AppData } from '@/app/data';
import { footerStyles as styles } from '@/theme/styles';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2 as Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
const iconMap: { [key: string]: React.ReactNode } = {
  facebook: <Facebook />,
  twitter: <Twitter />,
  instagram: <Instagram />,
  linkedin: <LinkedIn />,
};
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={styles.container}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={{ xs: 8, md: 3 }}>
          <Grid size={{ md: 3, xs: 12 }}>
            <Box sx={{ float: 'left' }}>
              <Image
                src="/images/logo.webp"
                alt={`${AppData.name} Logo`}
                width={150}
                height={50}
                priority
              />
            </Box>
            <Box sx={styles.section}>
              <Typography variant="body2" align="justify">
                {AppData.footer.message1}
              </Typography>
              <Typography variant="body2" align="justify">
                {AppData.footer.message2}
              </Typography>
            </Box>
            <Box>
              {AppData.socials.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  sx={{ color: 'white' }}
                >
                  {iconMap[social.name.toLowerCase()] || social.name}
                </IconButton>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}></Grid>
          <Grid size={{ md: 3, xs: 12 }}>
            <Typography variant="h6">Newsletter</Typography>
            <Box sx={styles.newsletter} component="form">
              <Typography variant="body1">
                Subscribe for latest updates
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                sx={styles.rounded}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={[styles.rounded, styles.newsButton]}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={styles.divider} />
        <Typography variant="body1" sx={styles.center}>
          Powered By{' '}
          <a href="https://reachai.online" target="_blank" rel="noreferrer">
            ReachAI
          </a>
          | All Rights Reserved! &copy; {currentYear}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
