/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { FC } from 'react';
import capitalizeText from '../../../utils/capitalizeText';
import Input from '../../atoms/Input';
import { InputBaseProps } from '../../types/InputTypes';
import useStyles from './styles';

interface InputLabelProps extends InputBaseProps {
  label: string;
  placeholder?: string;
  fullwidth?: boolean;
  error?: boolean;
  helperText?: string | false | undefined;
}

const InputLabel: FC<InputLabelProps> = (props) => {
  const { label, placeholder, fullwidth, error, helperText } = props;
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.labelWrapper}>
        <h5 className={classes.label}>{label.toUpperCase()}</h5>
        <p className={classes.helperText}>{helperText}</p>
      </div>
      <Input
        {...props}
        error={error}
        fullwidth={fullwidth}
        placeholder={placeholder || capitalizeText(label)}
      />
    </div>
  );
};

export default InputLabel;
