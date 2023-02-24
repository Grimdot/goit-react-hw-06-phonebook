import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/contactsSlice';
import { getFilter } from 'redux/filtersSlice';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.toLowerCase().trim();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => {
        return <ContactItem name={name} number={number} key={id} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
