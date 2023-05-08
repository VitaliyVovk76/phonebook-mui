import { useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import contactsSelectonrs from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';
import Modal from '../../componenrts/Modal';
import ContactFormUpdate from '../../componenrts/ContactFormUpdate';

const SingleContactPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/';
  const contactId = location.state.contactId;
  const contacts = useSelector(contactsSelectonrs.getAllContacts);
  const searchContact = contacts.find(contact => contact.id === contactId);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(state => !state);

  const onDeleteContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
    navigate('/contacts');
  };

  return (
    <>
      {searchContact && (
        <div>
          <p>{`${searchContact.name} : ${searchContact.number}`}</p>
          <ul>
            <li>
              <button
                type="button"
                onClick={() => onDeleteContact(searchContact.id)}
              >
                Delete
              </button>
            </li>
            <li>
              <button type="button" onClick={() => toggleModal()}>
                Update
              </button>
            </li>
            <NavLink to={backLinkHref}>Back</NavLink>
          </ul>

          {showModal && (
            <Modal onClose={toggleModal}>
              <ContactFormUpdate
                text="Update Contact"
                onClose={toggleModal}
                id={contactId}
              />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default SingleContactPage;
