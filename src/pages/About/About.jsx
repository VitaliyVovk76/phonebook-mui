import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ my: 2, textAlign: 'center' }}>
        Phonebook
      </Typography>
      <p>
        Simple study web app to store contacts in a cloud.{' '}
        <Link to="/register">Register</Link> your account or{' '}
        <Link to="/login">log in</Link> by using email and password, and you’ll
        get personal contacts notebook. Phone book can be accessed from any
        devices and any browsers.
      </p>
      <p>
        Registration format: <br /> - name must be unique <br /> - e-mail as
        *****@*****.*** <br /> - password must be at least 8 characters long
      </p>
      <p>
        Registration data example: <br /> - name: svinka3 <br /> - e-mail:
        svinka3@gmail.com <br /> - password: svinka3svinka3
      </p>
      <p>In this application I had used following framework and libraries:</p>
      <ul>
        <li>- React</li>
        <li>- Redux, redux-toolkit</li>
        <li>- React-router-dom</li>
        <li>- React-persist</li>
        <li>- Axios</li>
        <li>- MUI components</li>
      </ul>
    </Box>
  );
};

export default About;
