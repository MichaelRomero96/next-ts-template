import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem } from '@szhsin/react-menu';
import { useState } from 'react';
import AppBar from '../../atoms/AppBar.tsx';
import { useTheme } from '../../../theme';
import { getUserStore } from '../../../store/selectors/auth';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import capitalizeText from '../../../utils/capitalizeText';
import ProfileModal from '../../organisms/ProfileModal';
import { logout } from '../../../store/slices/auth';
import useStyles from './styles';

const Layout = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserStore);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const { colors } = useTheme();
  const { classes } = useStyles();

  return (
    <>
      <AppBar>
        <div className={classes.root}>
          <div className={classes.titlebar}>
            <h2 className={classes.title}>Admin Panel</h2>
          </div>
          {user && (
            <div style={{ padding: 10, alignSelf: 'flex-end' }}>
              <Menu
                transition
                menuButton={
                  <div className={classes.menuWrapper}>
                    <FontAwesomeIcon
                      style={{ cursor: 'pointer' }}
                      icon={solid('user')}
                      size="2x"
                      color={colors.base.white}
                    />
                  </div>
                }
              >
                <div className={classes.menuContent}>
                  <h2
                    style={{
                      marginLeft: 10,
                      marginBottom: 5,
                      fontSize: '20px',
                    }}
                  >
                    {user?.name} {user?.lastName}
                  </h2>
                  <MenuItem onClick={() => setOpenProfileModal(true)}>
                    <h4>My Profile</h4>
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logout())}>
                    <h4>Logout</h4>
                  </MenuItem>
                  <h2
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      color: 'red',
                      fontSize: '16px',
                    }}
                  >
                    {capitalizeText(user?.role || '')} user - Panel App v 1.0
                  </h2>
                </div>
              </Menu>
            </div>
          )}
        </div>
      </AppBar>
      <ProfileModal
        user={user}
        open={openProfileModal}
        setOpen={setOpenProfileModal}
      />
    </>
  );
};

export default Layout;
