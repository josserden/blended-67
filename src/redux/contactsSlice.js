import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContact: (state, { payload }) => {
    //   state.contacts.push(payload);
    // },
    // removeContact: (state, { payload }) => {
    //   state.contacts = state.contacts.filter(({ id }) => id !== payload);
    // },
    filteredContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending](state, action) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducers = contactsSlice.reducer;
export default contactsSlice;
