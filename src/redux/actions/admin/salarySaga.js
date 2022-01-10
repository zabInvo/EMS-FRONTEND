import { call, put, takeLatest } from "redux-saga/effects";

import { SET_SALARIES } from "../../reducers/admin/salaryReducer";
import service from "../../../services/axiosService";

const fetchSalariesApi = async () => {
  try {
    const payload = {
      companyId: 18,
    };
    const employees = await service.post(
      "salary/getAllSalary",
      JSON.parse(localStorage.getItem("adminToken")),
      payload
    );
    return employees.data.company.Employees;
  } catch (error) {
    console.log(error);
  }
};

const createSalaryApi = async (data) => {
  try {
    const employees = await service.post(
      "salary/addSalary",
      JSON.parse(localStorage.getItem("adminToken")),
      data.payload
    );
    console.log(employees.data.message);
    return employees.data;
  } catch (error) {
    console.log(error);
  }
};

const updateSalaryApi = async (data) => {
  try {
    const employees = await service.post(
      "salary/updateSalary",
      JSON.parse(localStorage.getItem("adminToken")),
      data.payload
    );
    console.log(employees.data.message);
    return employees.data;
  } catch (error) {
    console.log(error);
  }
};

function* fetchSalaries() {
  try {
    const salaries = yield call(fetchSalariesApi);
    if (salaries) {
      yield put(SET_SALARIES(salaries));
    }
  } catch (error) {
    console.log(error);
  }
}

function* createSalary(data) {
  try {
    const salaries = yield call(createSalaryApi, data);
    if (salaries) {
      yield call(fetchSalaries);
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateSalary(data) {
  try {
    const salaries = yield call(updateSalaryApi, data);
    if (salaries) {
      yield call(fetchSalaries);
    }
  } catch (error) {
    console.log(error);
  }
}

function* salarySaga() {
  yield takeLatest("FETCH_SALARIES_REQUEST", fetchSalaries);
  yield takeLatest("CREATE_SALARY_REQUEST", createSalary);
  yield takeLatest("UPDATE_SALARY_REQUEST", updateSalary);
}

export default salarySaga;
