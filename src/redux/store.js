import contactsReducer from './contacts/contact-reducer';
import userReducer from './user/user-reducer';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
  },
});

export default store;
