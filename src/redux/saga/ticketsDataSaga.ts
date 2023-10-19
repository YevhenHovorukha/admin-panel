import { call, put, takeEvery } from "redux-saga/effects";

import {
  fetchTicketsRequest,
  fetchTicketsSuccess,
} from "../slice/ticketsSlice";
import { getTicketsData } from "../../api";
import { ITicketData } from "../../types/data";

function* fetchTicketsDataSaga() {
  const data: ITicketData[] = yield call(getTicketsData);
  yield put(fetchTicketsSuccess(data));
}

export default function* ticketsDataSaga() {
  yield takeEvery(fetchTicketsRequest, fetchTicketsDataSaga);
}
