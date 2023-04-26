import { Dispatch, FC, SetStateAction } from 'react';
import Modal from '../../atoms/Modal';
import { User } from '../../../store/types';
import useStyles from './styles';

interface ProfileModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user: User | null | undefined;
}

const ProfileModal: FC<ProfileModalProps> = ({ open, setOpen, user }) => {
  const { classes } = useStyles();
  if (!user) return null;
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={classes.root}>
        <h2 className={classes.userProfile}>Profile</h2>
        <div>
          Full name: {user.name} {user.lastName}
        </div>
        <div>Email: {user.email}</div>
        <div>Role: {user.role}</div>
      </div>
    </Modal>
  );
};

export default ProfileModal;
