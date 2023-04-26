import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(() => ({
  root: {
    width: '70vw',
    margin: '0 auto',
    marginTop: 100,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    paddingBottom: 10,
    flexGrow: 1,
  },
}));

export default useStyles;
