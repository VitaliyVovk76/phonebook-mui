import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userOperations from '../../redux/user/user-operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');
    if (email.trim() === '' || password.trim() === '' || name.trim() === '') {
      toast.warn('Fill the form!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    if (password.trim().length < 8) {
      toast.warn('Password must be at least 8 characters long', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    dispatch(userOperations.register({ name, email, password }));
    event.currentTarget.reset();
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: { xs: '20px', sm: '100px' },
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      <Typography variant="h5" sx={{ my: 2, textAlign: 'center' }}>
        Registration
      </Typography>
      <TextField
        required
        sx={{ marginBottom: '10px' }}
        id="standard-required"
        label="Name"
        variant="standard"
        type="text"
        name="name"
      />
      <TextField
        required
        sx={{ marginBottom: '10px' }}
        id="standard-required"
        label="Email address"
        variant="standard"
        type="email"
        name="email"
      />
      <FormControl variant="standard" sx={{ marginBottom: '10px' }}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained" type="submit" sx={{ marginTop: '40px' }}>
        Registration
      </Button>
    </Box>
  );
};

export default RegisterForm;
