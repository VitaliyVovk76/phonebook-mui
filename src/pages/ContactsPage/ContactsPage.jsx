import { useState } from 'react';
import Modal from '../../componenrts/Modal';
import ContactForm from '../../componenrts/ContactForm';
import ContactsList from '../../componenrts/ContactsList/ContactsList';
import Filter from '../../componenrts/Filter';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <button type="button" onClick={() => toggleModal()}>
          Create contact
        </button>
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm text="Add Contact" onClose={toggleModal} />
        </Modal>
      )}

      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
