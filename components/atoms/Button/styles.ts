import { makeStyles } from '../../../theme';

interface ButtonStyleProps {
  fullwidth?: boolean;
  outline?: boolean;
}

const useStyles = makeStyles<ButtonStyleProps>()(
  ({ colors }, { fullwidth, outline }) => ({
    root: {
      all: 'unset',
      width: fullwidth ? '100%' : 'unset',
      height: 30,
      padding: '5px 12px',
      backgroundColor: colors.base.primary,
      color: colors.base.white,
      fontSize: '16px',
      borderRadius: 20,
      border: outline ? `1px solid ${colors.base.white}` : 'none',
      '&:hover': {
        backgroundColor: colors.hover.primary,
      },
      textAlign: 'center',
      cursor: 'pointer',
    },
  })
);

export default useStyles;
