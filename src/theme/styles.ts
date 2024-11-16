export const headerStyles = {
  container: {
    bgcolor: 'background.default',
    py: 2,
  },
  flexHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    gap: 2,
  },
  signUpButton: {
    bgcolor: 'primary.main',
    color: 'white',
    '&:hover': {
      bgcolor: 'primary.dark',
    },
  },
  signInButton: {
    border: '2px solid',
    borderColor: 'primary.main',
    color: 'primary.main',
    '&:hover': {
      bgcolor: 'primary.light',
      color: 'white',
    },
  },
};
export const footerStyles = {
  container: {
    pt: 12,
    pb: 4,
    bgcolor: '#f5f5f5',
  },
  rounded: {
    borderRadius: 10,

    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
    },
  },
  center: { textAlign: 'center', py: 2 },
  divider: {
    background: '#fff',
    height: '3px',
    my: 4,
  },
  section: {
    '& > :not(style)': {
      my: 1,
    },
  },
  newsletter: {
    '& > :not(style)': {
      my: 1,
    },
  },
  newsButton: {
    background: 'primary.main !important',
    color: '#fff',
    px: 3,
    textTransform: 'capitalize',

    '&:hover': {
      background: '#000',
    },
  },
  button: {
    color: 'white',
    bgcolor: 'primary.main',
    fontWeight: 'bold',
    px: 3,
    textTransform: 'capitalize',
    margin: '8px',
  },
};
