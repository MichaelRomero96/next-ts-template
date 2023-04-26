import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  titlebar: {
    padding: 10,
    flexGrow: 1,
  },
  title: {
    color: colors.base.white,
  },
  menuWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  menuContent: {
    padding: 10,
  },
}));

export default useStyles;
