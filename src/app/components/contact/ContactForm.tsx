'use client';
import React, { useRef, FC } from 'react';
import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import { AppData } from '@/app/data';

const ContactForm: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = () => {};
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        maxWidth: '510px',
        ml: 'auto',
        mr: 'auto',
        padding: '50px 0 100px',
      }}
    >
      <Grid2 container spacing={2}>
        <Box>
          <Typography variant="h1" fontSize="28px" fontWeight="700" mb="5px">
            Contact Us
          </Typography>

          <Typography fontSize="14px" mb="30px">
            {AppData.contactForm.message}
          </Typography>

          <Box
            ref={formRef}
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <Box
              sx={{
                background: '#fff',
                padding: '30px 20px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              }}
              className="bg-black"
            >
              <Grid2 container alignItems="center" spacing={2}>
                <Grid2 size={12}>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      mb: '10px',
                      display: 'block',
                    }}
                  >
                    Name
                  </Typography>
                  <TextField
                    autoComplete="name"
                    name="name"
                    fullWidth
                    id="name"
                    autoFocus
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid2>

                <Grid2 size={12}>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      mb: '10px',
                      display: 'block',
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid2>

                <Grid2 size={12}>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      mb: '10px',
                      display: 'block',
                    }}
                  >
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    autoComplete="phone"
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid2>

                <Grid2 size={12}>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      mb: '10px',
                      display: 'block',
                    }}
                  >
                    Subject
                  </Typography>
                  <TextField
                    fullWidth
                    id="subject"
                    name="subject"
                    autoComplete="subject"
                    InputProps={{
                      style: { borderRadius: 8 },
                    }}
                  />
                </Grid2>

                <Grid2 size={12}>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      mb: '10px',
                      display: 'block',
                    }}
                  >
                    Message
                  </Typography>

                  <TextField
                    id="message"
                    name="message"
                    multiline
                    maxRows={4}
                    minRows={5}
                    style={{
                      width: '100%',
                      background: '#FFFFFF',
                      color: '#5B5B98',
                      padding: '16.5px 14px',
                    }}
                    className="dark-textarea"
                  />
                </Grid2>
              </Grid2>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                textTransform: 'capitalize',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '15px',
                padding: '12px 10px',
                color: '#fff !important',
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Grid2>
    </Box>
  );
};
export default ContactForm;
