import { call, put, takeLatest } from "redux-saga/effects";

import { SET_ATTENDANCE } from "../../reducers/admin/attendanceReducer";
import service from "../../../services/axiosService";

const fetchAttendanceApi = async () => {
  try {
    const payload = {
      companyId: 18,
    };
    const attendance = await service.post(
      "attendance/getAllAttendance",
      JSON.parse(localStorage.getItem("adminToken")),
      payload
    );
    return attendance.data.data[0].Employees;
  } catch (error) {
    console.log(error);
  }
};

const createAttendanceApi = async (data) => {
  try {
    const attendance = await service.post(
      "attendance/createAttendance",
      JSON.parse(localStorage.getItem("adminToken")),
      data.payload
    );
    console.log(attendance.data.message);
    return attendance.data;
  } catch (error) {
    console.log(error);
  }
};

function* fetchAttendance() {
  try {
    const attendance = yield call(fetchAttendanceApi);
    if (attendance) {
      yield put(SET_ATTENDANCE(attendance));
    }
  } catch (error) {
    console.log(error);
  }
}

function* createAttendance(data) {
  try {
    const attendance = yield call(createAttendanceApi, data);
    if (attendance) {
      yield call(fetchAttendance);
    }
  } catch (error) {
    console.log(error);
  }
}

function* attendanceSaga() {
  yield takeLatest("FETCH_ATTENDANCE_REQUEST", fetchAttendance);
  yield takeLatest("CREATE_ATTENDANCE_REQUEST", createAttendance);
}

export default attendanceSaga;
