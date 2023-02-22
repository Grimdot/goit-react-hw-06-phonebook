import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from '@reduxjs/toolkit';

const contactsInitialState = () => {
  const LSContacts = JSON.parse(localStorage.getItem('contacts'));

  if (LSContacts) {
    return LSContacts;
  } else {
    return [];
  }
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    addContact: (state, action) => {
      return [...state, { id: nanoid(), ...action.payload }];
    },

    removeContact: (state, action) => {
      return [...state.filter(contact => contact.id !== action.payload)];
    },
  },
});
