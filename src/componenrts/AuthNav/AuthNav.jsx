import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemBtnLink from '../ListItemBtnLink/ListItemBtnLink';

const authNav = [
  { menuItem: 'login', destination: 'Log in' },
  { menuItem: 'register', destination: 'Registration' },
];
export const AuthNav = () => {
  return (
    <List
      disablePadding
      sx={{
        display: { xs: 'block', sm: 'flex' },
      }}
    >
      {authNav.map(({ menuItem, destination }) => (
        <ListItem key={menuItem} disablePadding>
          <ListItemBtnLink text={destination} to={menuItem} />
        </ListItem>
      ))}
    </List>
  );
};

export default AuthNav;
