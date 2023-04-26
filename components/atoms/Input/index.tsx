/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { InputBaseProps } from '../../types/InputTypes';
import useStyles from './styles';

interface InputProps extends InputBaseProps {
  fullwidth?: boolean;
  error?: boolean;
}

const Input: FC<InputProps> = (props) => {
  const { fullwidth = false, error } = props;
  const { classes } = useStyles({ fullwidth, error });
  return <input className={classes.root} {...props} />;
};

export default Input;
