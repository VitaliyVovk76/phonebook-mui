import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer } from 'react-toastify';
import MyAppBar from '../MyAppBar';
import Copyright from '../Copyright';

const Layout = () => {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <MyAppBar />
        <Container component="main" maxWidth="xl">
          <ToastContainer />
          <Suspense
            fallback={
              <div>
                <p>Loading...</p>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
  );
};

export default Layout;
