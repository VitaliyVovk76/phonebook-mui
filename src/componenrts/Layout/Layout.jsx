import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import MyAppBar from '../MyAppBar';

const Layout = () => {
  return (
    <div>
      <MyAppBar />
      <Container component="main" maxWidth="xl">
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
    </div>
  );
};

export default Layout;
