/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from 'react';
import useStyles, { FlexBoxStyleProps } from './styles';

type DivBaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface FlexBoxProps extends DivBaseProps, FlexBoxStyleProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

const FlexBox: FC<FlexBoxProps> = (props) => {
  const { justify, alignItems, children, className } = props;
  const { classes } = useStyles({ justify, alignItems });
  return <div className={clsx([classes.root, className])}>{children}</div>;
};

export default FlexBox;
