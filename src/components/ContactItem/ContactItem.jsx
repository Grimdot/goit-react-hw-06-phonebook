import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contactItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  handleDeleteBtn: PropTypes.func,
};

export default ContactItem;
