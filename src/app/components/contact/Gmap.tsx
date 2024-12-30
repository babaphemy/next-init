import { Box, Grid2 as Grid, IconButton, Paper, Tooltip } from '@mui/material';
import { OpenInNew, Navigation } from '@mui/icons-material';
import { AppData } from '@/app/data';
interface MapProps {
  handleDirections: () => void;
}
const Gmap: React.FC<MapProps> = ({ handleDirections }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: AppData.name,
        text: `Visit us at ${AppData.address}`,
        url: window.location.href,
      });
    }
  };
  return (
    <Grid size={{ xs: 12, md: 8 }}>
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          height: 600,
          overflow: 'hidden',
          borderRadius: 4,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: (theme) => `0 8px 30px ${theme.palette.primary.main}20`,
          },
        }}
      >
        <iframe
          src={AppData.googleMap}
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            display: 'flex',
            gap: 1,
          }}
        >
          <Tooltip title="Share Location" arrow>
            <Paper elevation={2} sx={{ borderRadius: 1 }}>
              <IconButton color="primary" onClick={handleShare} size="small">
                <Navigation />
              </IconButton>
            </Paper>
          </Tooltip>
          <Tooltip title="Open in Google Maps" arrow>
            <Paper elevation={2} sx={{ borderRadius: 1 }}>
              <IconButton
                color="primary"
                onClick={handleDirections}
                size="small"
              >
                <OpenInNew />
              </IconButton>
            </Paper>
          </Tooltip>
        </Box>
      </Paper>
    </Grid>
  );
};
export default Gmap;
