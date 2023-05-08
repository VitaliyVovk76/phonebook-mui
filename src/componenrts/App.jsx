import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from '../redux/user/user-operations';
import userSeletors from '../redux/user/user-selectors';
import PublicRoute from '../componenrts/PublicRoute';
import PrivateRoute from '../componenrts/PrivateRoute';

import Layout from './Layout';
// const Layout = lazy(() => import('./Layout'));
import About from '../pages/About';
// const About = lazy(() => import('../pages/About'));
import ContactsPage from '../pages/ContactsPage';
// const ContactsPage = lazy(() => import('../pages/ContactsPage'));
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SingleContactPage from '../pages/SingleContactPage';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(userSeletors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(userOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute component={<About />} />} />
            <Route
              path="login"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                  restricted
                />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                  restricted
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route
              path="contacts/:contactId"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<SingleContactPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
