import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./reducers/contact";

export type RoodReducer = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
