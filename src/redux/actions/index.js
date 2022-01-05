import { all } from "redux-saga/effects";
import authSaga from "../actions/admin/authSaga";

// ADD MULTIPLE SAGA
function* rootSaga() {
  yield all([authSaga()]);
}

export default rootSaga;
