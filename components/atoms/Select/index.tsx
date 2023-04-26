/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import clsx from 'clsx';
import useStyles from './styles';

type SelectPropsBase = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

interface SelectProps extends SelectPropsBase {
  options: string[];
  label: string;
  helperText: string | false | undefined;
  classNames?: string;
  error?: boolean;
}

const Select: FC<SelectProps> = (props) => {
  const { options, label, helperText, classNames, error } = props;
  const { classes } = useStyles({ error });
  return (
    <div>
      <div className={classes.labelWrapper}>
        <h5 className={classes.label}>{label.toUpperCase()}</h5>
        <p className={classes.helperText}>{helperText}</p>
      </div>
      <select {...props} className={clsx([classes.select, classNames])}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
