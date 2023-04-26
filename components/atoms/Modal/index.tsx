/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  Dispatch,
  FC,
  MouseEvent,
  ReactNode,
  SetStateAction,
  useRef,
} from 'react';
import useStyles from './styles';

interface ModalProps {
  children: ReactNode[] | ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface EventTarget {
  nodeName: string;
}

const Modal: FC<ModalProps> = ({ children, open, setOpen }) => {
  const { classes } = useStyles();
  const container = useRef(null);
  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    const eventTarget = e.target as unknown as EventTarget;
    if (eventTarget.nodeName === 'BUTTON') return;
    setOpen(!(container.current === e.target));
  };

  if (!open) return null;
  return (
    <div ref={container} className={classes.root} onClick={handleClick}>
      <div className={classes.mainContainer}>{children}</div>
    </div>
  );
};

export default Modal;
