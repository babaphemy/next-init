import { Box, Chip, Stack, Typography } from '@mui/material';
import { PinDrop, Phone, Email } from '@mui/icons-material';
import { AppData } from '@/app/data';

const Gmap: React.FC = () => (
  <Stack spacing={2} mt={8}>
    <Stack direction={'row'} spacing={2}>
      <PinDrop />
      <Typography variant="h4">{AppData.address}</Typography>
    </Stack>
    <Stack direction={'row'} spacing={2}>
      <Phone />
      {AppData.phone.map((phone) => (
        <Chip key={phone} label={phone} color="primary" />
      ))}
    </Stack>
    <Stack direction={'row'} spacing={2}>
      <Email />
      {AppData.adminEmail.map((email) => (
        <Chip key={email} label={email} variant="outlined" color="success" />
      ))}
    </Stack>
    <Box mt={4}>
      <iframe
        src={AppData.googleMap}
        width="100%"
        height="400"
        style={{
          border: '0',
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  </Stack>
);
export default Gmap;
