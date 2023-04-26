import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuItem } from '@szhsin/react-menu';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../../store/slices/users';
import { User } from '../../../../../store/types';
import { useTheme } from '../../../../../theme';
import ConfirmationDeleteModal from './ConfirmationDeleteModal';
import useStyles from './styles';
import UserForm from './UserForm';

interface ActionsProps {
  user: User;
}

const Actions: FC<ActionsProps> = ({ user }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { classes } = useStyles();
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
    setOpenConfirmDelete(false);
  };

  return (
    <>
      <Menu
        transition
        menuButton={
          <div className={classes.root}>
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              icon={solid('circle-chevron-down')}
              color={colors.base.white}
            />
          </div>
        }
      >
        <MenuItem onClick={() => setOpenForm(true)}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={solid('pen')}
            color={colors.base.primary}
          />
          <h4 className={classes.textItem}>Edit</h4>
        </MenuItem>
        <MenuItem onClick={() => setOpenConfirmDelete(true)}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={solid('trash')}
            color={colors.base.primary}
          />
          <h4 className={classes.textItem}>Delete</h4>
        </MenuItem>
      </Menu>
      <ConfirmationDeleteModal
        open={openConfirmDelete}
        setOpen={setOpenConfirmDelete}
        user={user}
        confirmAction={handleDelete}
      />
      <UserForm edit open={openForm} setOpen={setOpenForm} user={user} />
    </>
  );
};

export default Actions;
