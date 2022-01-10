import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import {
  LOGIN_EMPLOYEE,
  LOGOUT_EMPLOYEE,
} from "../../reducers/employee/loginReducer";
import service from "../../../services/axiosService";
import { CollectionsOutlined } from "@mui/icons-material";

const loginApi = async (data) => {
  try {
    const payload = data.data;
    const login = await service.post("employee/login", "", payload);
    localStorage.setItem(
      "employeeToken",
      JSON.stringify(login.data.user.token)
    );
    return login.data;
  } catch (error) {
    console.log(error);
  }
};

const updatePasswordApi = async (data) => {
  try {
    const updatePassword = await service.post(
      "employee/updatePassword",
      JSON.parse(localStorage.getItem("employeeToken")),
      data.payload
    );
    console.log(updatePassword.data.message);
    return updatePassword.data;
  } catch (error) {
    console.log(error);
  }
};

function* login(data) {
  try {
    const token = yield call(loginApi, data);
    if (token) {
      yield put(LOGIN_EMPLOYEE(token));
    }
  } catch (error) {
    console.log(error);
  }
}

function* logout() {
  try {
    yield put(LOGOUT_EMPLOYEE());
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

function* updatePassword(data) {
  try {
    const updatePassword = yield call(updatePasswordApi, data);
    CollectionsOutlined.log(updatePassword);
  } catch (error) {
    console.log(error);
  }
}

function* employeeSaga() {
  yield takeLatest("EMPLOYEE_LOGIN_REQUEST", login);
  yield takeEvery("EMPLOYEE_LOGOUT_REQUEST", logout);
  yield takeEvery("EMPLOYEE_UPDATE_PASSWORD_REQUEST", updatePassword);
}

export default employeeSaga;
