import { all, fork } from "redux-saga/effects";
import newsSaga from "./news/saga";

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}
//blocking vs non-blocking function
//blocking : call , put
// non-blocking : fork
//all ,fork
