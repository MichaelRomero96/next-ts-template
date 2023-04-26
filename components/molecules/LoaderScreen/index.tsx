import Gear from '../../atoms/Gear';
import useStyles from './styles';

const LoaderScreen = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Gear />
    </div>
  );
};

export default LoaderScreen;
