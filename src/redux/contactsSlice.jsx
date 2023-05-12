import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contactList: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contactList.push(action.payload);
      },

      prepare({ id, name, number }) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.contactList = state.contactList.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedReducer = persistReducer(persistConfig, contactsReducer);
