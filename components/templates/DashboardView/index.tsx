import { useState } from 'react';
import { useSelector } from 'react-redux';
import getUsersStore from '../../../store/selectors/users';
import Button from '../../atoms/Button';
import LoaderScreen from '../../molecules/LoaderScreen';
import useStyles from './styles';
import UsersTable from './UsersTable';
import UserForm from './UsersTable/Actions/UserForm';

const DashboardView = () => {
  const users = useSelector(getUsersStore);
  const { classes } = useStyles();
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  if (users.length === 0) return <LoaderScreen />;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.main}>
          <h2 className={classes.title}>Users</h2>
          <Button
            onClick={() => setOpenCreateUserModal(true)}
            text="Create User"
          />
        </div>
        <UsersTable users={users} />
      </div>
      <UserForm open={openCreateUserModal} setOpen={setOpenCreateUserModal} />
    </>
  );
};

export default DashboardView;
