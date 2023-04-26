import { makeStyles } from '../../../theme';

interface InputStyleProps {
  fullwidth?: boolean;
  error?: boolean;
}

const useStyles = makeStyles<InputStyleProps>()(
  ({ colors }, { error, fullwidth }) => ({
    root: {
      all: 'unset',
      width: fullwidth ? '100%' : 'unset',
      height: 40,
      paddingLeft: 10,
      backgroundColor: colors.clear.primary.soft,
      borderRadius: 20,
      border: error ? `1px solid ${colors.base.error}` : 'unset',
      '&:hover': {
        backgroundColor: colors.clear.primary.mid,
      },
      '&:focus': {
        backgroundColor: colors.clear.primary.mid,
      },
      '&::selection': {
        backgroundColor: colors.base.primary,
      },
      '&::placeholder': {
        color: error ? `1px solid ${colors.base.error}` : 'unset',
      },
    },
  })
);

export default useStyles;
