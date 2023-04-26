import { createMakeAndWithStyles } from 'tss-react';

export function useTheme() {
  return {
    colors: {
      base: {
        primary: '#E66369',
        white: '#ffff',
        error: '#ff0000',
      },
      clear: {
        primary: {
          soft: '#e663692e',
          mid: '#e6636949',
        },
      },
      hover: {
        primary: '#c55157',
      },
    },
    breakpoints: {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1366,
      xxl: 1600,
    },
  };
}

export const { makeStyles, withStyles, useStyles } = createMakeAndWithStyles({
  useTheme,
});
