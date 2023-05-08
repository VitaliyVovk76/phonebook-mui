import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/user-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>
            About
          </NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
