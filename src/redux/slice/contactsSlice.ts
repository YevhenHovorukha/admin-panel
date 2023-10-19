import { createSlice } from "@reduxjs/toolkit";

import { IContactData } from "../../types/data";

interface ContactsState {
  data: IContactData[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContactsState = { data: null, loading: false, error: null };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchContactsRequest: (state) => {
      state.loading = true;
    },
    fetchContactsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchContactsFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
} = contactsSlice.actions;
export default contactsSlice.reducer;
