import React from 'react';
import Link from 'next/link';
import { Box, Button, Container } from '@mui/material';
import { headerStyles as styles } from '@/theme/styles';
import Image from 'next/image';
import { AppData } from '@/app/data';
const message = `Hello ${AppData.name} ! I need help with...`;
const Header = () => (
  <Box sx={styles.container}>
    <Container maxWidth="lg">
      <Box sx={styles.flexHeader}>
        <Link href="/" passHref>
          <Box sx={styles.logoContainer}>
            <Image src="/images/logo.webp" alt="logo" width={200} height={60} />
          </Box>
        </Link>
        <Box sx={styles.buttonContainer}>
          {AppData?.whatsapp && (
            <Link
              href={`https://wa.me/${
                AppData.whatsapp
              }?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noreferrer"
              passHref
            ></Link>
          )}
          <Link href={'/contact'} passHref>
            <Button variant="text" sx={{ color: 'primary.main' }}>
              Contact Us
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Header;
