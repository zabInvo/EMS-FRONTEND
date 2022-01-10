import { all } from "redux-saga/effects";
import authSaga from "../actions/admin/authSaga";
import companySaga from "./admin/companySaga";
import employeesSaga from "./admin/employeesSaga";
import salarySaga from "./admin/salarySaga";
import attendanceSaga from "./admin/attendanceSaga";
import employeesAuthSaga from "./employee/authSaga";
import dashboardSaga from './employee/dashboardSaga'
import employeeAttendanceSaga from "./employee/attendanceSaga";

// ADD MULTIPLE SAGA
function* rootSaga() {
  yield all([
    authSaga(),
    companySaga(),
    employeesSaga(),
    salarySaga(),
    attendanceSaga(),
    employeesAuthSaga(),
    dashboardSaga(),
    employeeAttendanceSaga()
  ]);
}

export default rootSaga;
