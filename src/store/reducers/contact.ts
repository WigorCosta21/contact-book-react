import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ContactType } from "../../types/Contact";
type ContactsState = {
  items: ContactType[];
};

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      fullname: "Contato 1",
      email: "contato1@email.com",
      phone: "(11) 99999-9999",
    },
    {
      id: 2,
      fullname: "Contato 2",
      email: "contato2@email.com",
      phone: "(11) 99999-9999",
    },
    {
      id: 3,
      fullname: "Contato 3",
      email: "contato3@email.com",
      phone: "(11) 99999-9999",
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<ContactType, "id">>) => {
      const contactExists = state.items.find((contact) => {
        return (
          contact.email.toLowerCase() === action.payload.email.toLowerCase()
        );
      });

      if (contactExists) {
        alert("Já existe um contao com esse email");
        return;
      }

      const lastContact = state.items[state.items.length - 1];

      const newContact = {
        ...action.payload,
        id: lastContact ? lastContact.id + 1 : 1,
      };

      state.items.push(newContact);
    },
    edit: (state, action: PayloadAction<ContactType>) => {
      const contactIndex = state.items.findIndex((contact) => {
        return contact.id === action.payload.id;
      });

      const contactExists = state.items.some((contact) => {
        return (
          contact.email.toLowerCase() === action.payload.email.toLowerCase() &&
          contact.id !== action.payload.id
        );
      });

      if (contactExists) {
        alert("Já existe um contao com esse email");
        return;
      }

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload;
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, edit, remover } = contactsSlice.actions;
export default contactsSlice.reducer;
