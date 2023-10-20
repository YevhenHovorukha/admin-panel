import { all } from "redux-saga/effects";

import contactsDataSaga from "./contactsDataSaga";
import ticketsDataSaga from "./ticketsDataSaga";

export default function* rootSaga() {
  yield all([contactsDataSaga(), ticketsDataSaga()]);
}
