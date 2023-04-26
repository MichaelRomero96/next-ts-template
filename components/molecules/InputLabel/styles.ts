import { makeStyles } from '../../../theme';

const useStyles = makeStyles()(({ colors }) => ({
  root: {
    // padding: '8px 0',
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
