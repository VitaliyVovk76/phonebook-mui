import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
