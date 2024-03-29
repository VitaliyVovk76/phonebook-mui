import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkHeader = ({ text, to }) => {
  return (
    <NavLink
      //   className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      to={to}
    >
      {text}
    </NavLink>
  );
};

NavLinkHeader.propTypes = { text: PropTypes.string, to: PropTypes.string };

export default NavLinkHeader;
