/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import useStyles from './styles';

type ButtonBaseProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonBaseProps {
  text: string;
  fullwidth?: boolean;
  outline?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { text, fullwidth = false, outline } = props;
  const { classes } = useStyles({ fullwidth, outline });
  return (
    <button className={classes.root} {...props}>
      {text}
    </button>
  );
};

export default Button;
