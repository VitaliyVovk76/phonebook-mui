import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import userSelectors from '../../redux/user/user-selectors';
import userOperations from '../../redux/user/user-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUsername);
  return (
    <List
      disablePadding
      sx={{
        display: { xs: 'block', sm: 'flex' },
        alignItems: 'center',
        justiflyContent: 'center',
      }}
    >
      <ListItem>
        <Typography variant="h7">Welcom,{name}</Typography>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          variant="text"
          sx={{
            height: '100%',
            '&:hover': {
              backgroundColor: '#0069d9',
              boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
          }}
          onClick={() => dispatch(userOperations.logOut())}
        >
          Log Out
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default UserMenu;
