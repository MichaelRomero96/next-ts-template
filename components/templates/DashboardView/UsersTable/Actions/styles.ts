import { makeStyles } from '../../../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: colors.base.primary,
    padding: 5,
    borderRadius: 15,
  },
  icon: {
    cursor: 'pointer',
  },
  textItem: {
    marginLeft: 10,
  },
}));

export default useStyles;
