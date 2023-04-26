import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    minWidth: '100vw',
    minHeight: '100vh',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  mainContainer: {
    margin: '0 auto',
    backgroundColor: colors.base.white,
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    borderRadius: 10,
  },
}));

export default useStyles;
