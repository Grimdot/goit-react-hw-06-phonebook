import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: { list: [] },

  reducers: {
    addContact: (state, action) => {
      return { list: [...state.list, { id: nanoid(), ...action.payload }] };
    },
    removeContact: (state, action) => {
      return {
        list: state.list.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const getContactsList = state => state.contacts.list;
