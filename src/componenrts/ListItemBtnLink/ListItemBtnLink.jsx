import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';

const ListItemBtnLink = ({ text, to }) => {
  return (
    <ListItemButton
      sx={{
        '&:hover': {
          backgroundColor: '#0069d9',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
      }}
      component={NavLink}
      to={to}
    >
      {text}
    </ListItemButton>
  );
};

export default ListItemBtnLink;
