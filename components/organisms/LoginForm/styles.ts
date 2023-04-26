import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  submitButtonWrapper: {
    marginTop: 20,
  },
  errorLabel: {
    color: colors.base.error,
    textAlign: 'center',
  },
  formWrapper: {
    marginTop: 20,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 30,
  },
  input: {
    width: '100%',
  },
}));

export default useStyles;
