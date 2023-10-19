import { createSlice } from "@reduxjs/toolkit";

import { ITicketData } from "../../types/data";

interface TicketsState {
  data: ITicketData[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: TicketsState = { data: null, loading: false, error: null };

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    fetchTicketsRequest: (state) => {
      state.loading = true;
    },
    fetchTicketsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchTicketsFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsFailure } =
  ticketsSlice.actions;
export default ticketsSlice.reducer;
