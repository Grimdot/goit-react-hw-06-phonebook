import { nanoid } from '@reduxjs/toolkit';

import { useDispatch, useSelector } from 'react-redux';
import { getContactsList, addContact } from 'redux/contactsSlice';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsList);

  const isContactExists = newName => {
    const normalizedNewName = newName.toLowerCase().trim();

    return contacts.some(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    isContactExists(name)
      ? alert(`${name} is already in contacts!`)
      : dispatch(
          addContact({
            id: nanoid(),
            name,
            number,
          })
        );

    e.target.reset();
  };

  return (
    <form name="createContactForm" onSubmit={onFormSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <br />
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.input}
        />
      </label>

      <button type="submit" className={css.inputButton}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
