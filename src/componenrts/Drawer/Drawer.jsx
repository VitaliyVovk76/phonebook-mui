import * as React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import userSelectors from '../../redux/user/user-selectors';

const TemporaryDrawer = ({ open, toggleDrawer }) => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        Phonebook
      </Typography>
      <Divider />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Navigation />
    </Box>
  );

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
