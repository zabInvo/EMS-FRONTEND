import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import { LOGIN_ADMIN } from "../../reducers/admin/loginReducer";
import service from "../../../services/axiosService";

const loginApi = async (data) => {
  try {
    const payload = data.data;
    const login = await service.post("admin/login", "", payload);
    return login.data;
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

function* adminSaga() {
  yield takeLatest("ADMIN_LOGIN_REQUEST", login);
}

export default adminSaga;
