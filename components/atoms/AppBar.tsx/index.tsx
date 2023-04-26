import { FC, ReactNode } from 'react';
import useStyles from './styles';

interface AppBarProps {
  children: ReactNode[] | ReactNode;
}

const AppBar: FC<AppBarProps> = ({ children }) => {
  const { classes } = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default AppBar;
