import { useSelector } from 'react-redux';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Drawer from '../Drawer/';
import userSelectors from '../../redux/user/user-selectors';

const MyAppBar = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onToggleDrawer = () => {
    setMobileOpen(state => !state);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box sx={{ display: { sm: 'block' } }}>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={onToggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'flex',
              },
              justifyContent: 'space-between',
              minHeight: '64px',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Box>
        <Drawer open={mobileOpen} toggleDrawer={onToggleDrawer} />
      </Container>
    </AppBar>
  );
};
export default MyAppBar;
