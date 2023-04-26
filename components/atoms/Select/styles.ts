import { makeStyles } from '../../../theme';

interface SelectStyleProps {
  error: boolean | undefined;
}

const useStyles = makeStyles<SelectStyleProps>()(({ colors }, { error }) => ({
  select: {
    all: 'unset',
    height: 40,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'center',
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
  labelWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 60%',
  },
  helperText: {
    margin: 0,
    marginTop: 5,
    marginLeft: 10,
    fontSize: '14px',
    color: colors.base.error,
    textAlign: 'end',
  },
  label: {
    margin: 5,
    marginBottom: 10,
  },
}));

export default useStyles;
