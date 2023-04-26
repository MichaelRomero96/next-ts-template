import { Dispatch, FC, SetStateAction } from 'react';
import { User } from '../../../../../../store/types';
import Button from '../../../../../atoms/Button';
import Modal from '../../../../../atoms/Modal';
import useStyles from './styles';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User;
  confirmAction: () => void;
}

const ConfirmationDeleteModal: FC<Props> = ({
  open,
  setOpen,
  user,
  confirmAction,
}) => {
  const { classes } = useStyles();
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={classes.root}>
        <h2>
          Are you sure to delete{' '}
          <span style={{ color: 'red' }}>
            {user?.name} {user?.lastName}
          </span>{' '}
          user?
        </h2>
        <div className={classes.buttonWrapper}>
          <Button text="Ok" onClick={confirmAction} />
          <Button text="Cancel" onClick={() => setOpen(false)} />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationDeleteModal;
