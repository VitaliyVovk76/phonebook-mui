import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemBtnLink from '../ListItemBtnLink/ListItemBtnLink';
import { useSelector } from 'react-redux';
import userSelectors from '../../redux/user/user-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  return (
    <List
      component="nav"
      disablePadding
      sx={{ display: { xs: 'block', sm: 'flex' } }}
    >
      <ListItem disablePadding>
        <ListItemBtnLink to="/" text="About" />
      </ListItem>
      <ListItem disablePadding>
        {isLoggedIn && <ListItemBtnLink to="contacts" text="Contacts" />}
      </ListItem>
    </List>
  );
};

export default Navigation;
