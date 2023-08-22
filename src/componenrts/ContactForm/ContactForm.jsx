import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactForm({ onClose }) {
  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const number = data.get('number');
    if (checkName(name)) {
      toast.warn('This name already exists', {
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
    if (name.trim() === '' || number.trim() === '') {
      toast.warn('Fill the form', {
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
    dispatch(contactOperations.addContact({ name, number }));
    event.currentTarget.reset();
    onClose();
  };

  const checkName = newName => allContacts.find(({ name }) => name === newName);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
          type="button"
          onClick={() => onClose()}
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            borderRadius: '50%',
            outline: '1px solid black',
            minWidth: 0,
            padding: '8px',
          }}
        >
          <CloseIcon />
        </Button>
        <Typography component="h1" variant="h5">
          New Contact
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Contacts name"
            variant="standard"
            type="text"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="number"
            label="Phone number"
            variant="standard"
            type="tel"
            name="number"
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ marginTop: '40px' }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
