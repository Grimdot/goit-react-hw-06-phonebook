import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState: { list: [] },

  reducers: {
    addContact: (state, action) => {
      state.list = [...state.list, { ...action.payload }];
    },
    removeContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const getContactsList = state => state.contacts.list;
