import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import contactsSlice from "./slice/contactsSlice";
import rootSaga from "./saga/rootSaga";
import ticketsSlice from "./slice/ticketsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    getContacts: contactsSlice,
    getTickets: ticketsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
