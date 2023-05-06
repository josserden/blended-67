import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { contactsReducers } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
  },

  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

setupListeners(store.dispatch);
