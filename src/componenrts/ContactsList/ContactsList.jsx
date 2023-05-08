import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { Status } from '../../redux/contacts/contacts-slice';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const contactsStatus = useSelector(contactsSelectors.getStatus);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (contactsStatus === Status.IDLE)
      dispatch(contactsOperations.fetchAllContacts());
  }, [dispatch, contactsStatus]);

  return (
    <>
      {contacts.length === 0 && <p>...no contacts</p>}
      <div>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <NavLink
                to={`/contacts/${id}`}
                state={{ from: location, contactId: id }}
              >
                View
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
