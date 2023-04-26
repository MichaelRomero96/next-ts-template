import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  root: {
    width: '60vw',
    height: '100%',
    margin: '15% auto',
  },
  paperWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  loginWrapper: {
    padding: 50,
  },
  signUpWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 15,
  },
  signupMessage: {
    backgroundColor: colors.base.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.base.white,
    textAlign: 'center',
  },
}));

export default useStyles;
