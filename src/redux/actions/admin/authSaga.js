import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import { LOGIN_ADMIN, LOGOUT_ADMIN } from "../../reducers/admin/loginReducer";
import service from "../../../services/axiosService";

const loginApi = async (data) => {
  try {
    const payload = data.data;
    const login = await service.post("admin/login", "", payload);
    localStorage.setItem("adminToken", JSON.stringify(login.data.token));
    return login.data;
  } catch (error) {
    console.log(error);
  }
};

const updatePasswordApi = async (data) => {
  try {
    const updatePassword = await service.post(
      "admin/updatePassword",
      JSON.parse(localStorage.getItem("adminToken")),
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
      yield put(LOGIN_ADMIN(token));
    }
  } catch (error) {
    console.log(error);
  }
}

function* logout(data) {
  try {
    yield put(LOGOUT_ADMIN());
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

function* updatePassword(data) {
  try {
    const updatePassword = yield call(updatePasswordApi, data);
    console.log(updatePassword);
  } catch (error) {
    console.log(error);
  }
}

function* adminSaga() {
  yield takeLatest("ADMIN_LOGIN_REQUEST", login);
  yield takeEvery("ADMIN_LOGOUT_REQUEST", logout);
  yield takeEvery("UPDATE_PASSWORD_REQUEST", updatePassword);
}

export default adminSaga;
