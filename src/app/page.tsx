import { Container, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ width: 1, height: '100vh' }}
      >
        <Typography variant="h1">Coming Soon</Typography>
      </Stack>
    </Container>
  );
}
