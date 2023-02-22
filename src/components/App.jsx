import { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

import { contactsSlice } from 'redux/contactsSlice';
import { filterSlice } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const LS_KEY = 'contacts';

const App = () => {
  const { addContact, removeContact } = contactsSlice.actions;
  const { changeFilter } = filterSlice.actions;

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase().trim();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const updateContactsList = (newContactName, newContactNumber) => {
    isContactExists(newContactName)
      ? alert(`${newContactName} is already in contacts!`)
      : dispatch(
          addContact({ name: newContactName, number: newContactNumber })
        );
  };

  const filterInputChange = ({ target }) => {
    const { value } = target;
    dispatch(changeFilter(value));
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const isContactExists = newName => {
    const normalizedNewName = newName.toLowerCase().trim();

    return contacts.some(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm updateContactsList={updateContactsList} />

      <h2>Contacts</h2>
      <Filter inputValue={filter} onInputChange={filterInputChange} />
      <ContactList contacts={visibleContacts} handleDeleteBtn={deleteContact} />
    </div>
  );
};

export default App;
