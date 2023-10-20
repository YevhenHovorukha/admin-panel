import { call, put, takeEvery } from "redux-saga/effects";

import {
  fetchContactsRequest,
  fetchContactsSuccess,
} from "../slice/contactsSlice";
import { getContactsData } from "../../api";
import { IContactData } from "../../types/data";

function* fetchContactsDataSaga() {
  const data: IContactData[] = yield call(getContactsData);
  yield put(fetchContactsSuccess(data));
}

export default function* contactsDataSaga() {
  yield takeEvery(fetchContactsRequest, fetchContactsDataSaga);
}
