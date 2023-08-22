import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import ContactForm from '../../componenrts/ContactForm';
import ContactsList from '../../componenrts/ContactsList/ContactsList';
import Filter from '../../componenrts/Filter';

const style = {
  position: 'absolute',
  top: { sm: '50%', xs: 0 },
  left: { sm: '50%', xs: 0 },
  transform: { sm: 'translate(-50%, -50%)' },
  width: { xs: '100%', sm: '450px' },
  bgcolor: 'background.paper',
  border: 'transparent',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

const ContactsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(state => !state);

  return (
    <div>
      <CssBaseline />
      <Typography variant="h5" sx={{ my: 2, textAlign: 'center' }}>
        Phonebook
      </Typography>
      <Button
        variant="contained"
        sx={{
          display: 'inlineFlex',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        onClick={toggleModal}
      >
        Create contact
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={toggleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <ContactForm onClose={toggleModal} />
          </Box>
        </Fade>
      </Modal>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
