import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { brandColors } from '@/theme/brand';

declare module '@mui/material/styles' {
  interface Palette {
    danger: {
      main: string;
    };
    dark: {
      main: string;
    };
  }
  interface PaletteOptions {
    danger?: {
      main: string;
    };
    dark?: {
      main: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    text: {
      primary: brandColors.primary,
      secondary: brandColors.primary,
      disabled: '#9B5E5E',
      hint: '#FFD6D7',
    },
    primary: {
      main: brandColors.primary,
      light: '#A56665',
      dark: '#5A1D1C',
    },
    secondary: {
      main: brandColors.secondary,
      light: '#FFB6B8',
      dark: '#C67F82',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    info: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    warning: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
    },
    error: {
      main: '#F44336',
      light: '#E57373',
      dark: '#D32F2F',
    },
    danger: {
      main: '#EE368C',
    },
    dark: {
      main: '#260944',
    },
    background: {
      default: '#FFF4F4',
      paper: '#FFECEC',
    },
  } as PaletteOptions,
  typography: {
    fontSize: 12,
  } as TypographyOptions,
};

const theme: Theme = createTheme(themeOptions);

export default theme;
