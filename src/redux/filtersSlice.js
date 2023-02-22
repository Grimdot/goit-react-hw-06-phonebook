import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: filterInitialState,

  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = filterSlice.actions;

export const getFilter = state => state.filter;
