import { makeStyles } from '../../../../../../theme';

const useStyles = makeStyles()(() => ({
  root: {
    padding: 30,
  },
  buttonWrapper: {
    padding: '0 20',
    paddingTop: 30,
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-evenly',
  },
}));

export default useStyles;
