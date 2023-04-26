import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  root: {
    width: '100vw',
    minHeight: '50px',
    backgroundColor: colors.base.primary,
  },
}));

export default useStyles;
