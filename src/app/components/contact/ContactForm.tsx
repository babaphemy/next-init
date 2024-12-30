'use client';
import React, { FC } from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid2 as Grid,
  IconButton,
  Paper,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Navigation,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  WhatsApp,
  AccessTime,
} from '@mui/icons-material';
import { AppData } from '@/app/data';

interface ContactFormProps {
  handleDirections: () => void;
}

const ContactForm: FC<ContactFormProps> = ({ handleDirections }) => {
  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: 'background.paper',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: (theme) => `0 8px 30px ${theme.palette.primary.main}20`,
          },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 3,
            borderBottom: '2px solid',
            borderColor: 'primary.main',
            pb: 1,
          }}
        >
          Contact Us
        </Typography>

        {/* Business Hours */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
          <AccessTime sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Opearting Hours
            </Typography>
            <Typography color="text.hint" sx={{ mt: 0.5 }}>
              {AppData.operatingHours}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Address Section */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
          <LocationOn sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Our Location
            </Typography>
            <Typography color="text.hint" sx={{ mt: 0.5 }}>
              {AppData.address}
            </Typography>
            <Button
              startIcon={<Navigation />}
              variant="outlined"
              size="small"
              onClick={handleDirections}
              sx={{ mt: 1 }}
            >
              Get Directions
            </Button>
          </Box>
        </Box>

        {/* Phone Section */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
          <Phone sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Phone Numbers
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {AppData.phone.map((phone) => (
                <Tooltip title="Click to call" arrow key={phone}>
                  <Chip
                    label={phone}
                    color="primary"
                    variant="outlined"
                    clickable
                    onClick={() =>
                      window.open(`tel:${phone.replace(/\s/g, '')}`)
                    }
                    icon={<WhatsApp />}
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                      transition: 'all 0.2s',
                    }}
                  />
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Email Section */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
          <Email sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Email Addresses
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {AppData.adminEmail.map((email) => (
                <Tooltip title="Click to send email" arrow key={email}>
                  <Chip
                    label={email}
                    color="primary"
                    variant="outlined"
                    clickable
                    onClick={() => window.open(`mailto:${email}`)}
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                      transition: 'all 0.2s',
                    }}
                  />
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Social Media Section */}
        <Divider sx={{ my: 3 }} />
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Follow Us
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Tooltip title="Facebook" arrow>
            <IconButton
              color="primary"
              onClick={() => window.open(AppData.socialMedia.facebook)}
              sx={{
                '&:hover': { transform: 'translateY(-3px)' },
                transition: 'transform 0.2s',
              }}
            >
              <Facebook />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter" arrow>
            <IconButton
              color="primary"
              onClick={() => window.open(AppData.socialMedia.twitter)}
              sx={{
                '&:hover': { transform: 'translateY(-3px)' },
                transition: 'transform 0.2s',
              }}
            >
              <Twitter />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              color="primary"
              onClick={() => window.open(AppData.socialMedia.linkedin)}
              sx={{
                '&:hover': { transform: 'translateY(-3px)' },
                transition: 'transform 0.2s',
              }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <IconButton
              color="primary"
              onClick={() => window.open(AppData.socialMedia.instagram)}
              sx={{
                '&:hover': { transform: 'translateY(-3px)' },
                transition: 'transform 0.2s',
              }}
            >
              <Instagram />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Grid>
  );
};
export default ContactForm;
