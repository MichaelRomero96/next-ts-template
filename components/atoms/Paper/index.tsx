/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from 'react';
import useStyles from './styles';

type DivBaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface PaperProps extends DivBaseProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

const Paper: FC<PaperProps> = (props) => {
  const { children, className } = props;
  const { classes } = useStyles();
  return <div className={clsx([classes.root, className])}>{children}</div>;
};

export default Paper;
