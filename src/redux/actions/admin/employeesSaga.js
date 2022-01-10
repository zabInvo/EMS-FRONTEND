import { call, put, takeLatest } from "redux-saga/effects";

import { SET_EMPLOYEES } from "../../reducers/admin/employeesReducers";
import service from "../../../services/axiosService";

const fetchEmployeesApi = async () => {
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

const createEmployeesApi = async (data) => {
  try {
    const employees = await service.post(
      "employee/create",
      JSON.parse(localStorage.getItem("adminToken")),
      data.payload
    );
    console.log(employees.data.message);
    return employees.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteEmployeeApi = async (data) => {
  try {
    const employees = await service.post(
      "employee/deleteEmployee",
      JSON.parse(localStorage.getItem("adminToken")),
      data.payload
    );
    console.log(employees.data.message);
    return employees.data;
  } catch (error) {
    console.log(error);
  }
};

function* fetchEmployees() {
  try {
    const employees = yield call(fetchEmployeesApi);
    if (employees) {
      yield put(SET_EMPLOYEES(employees));
    }
  } catch (error) {
    console.log(error);
  }
}

function* createEmployees(data) {
  try {
    const employees = yield call(createEmployeesApi,data);
    if (employees) {
      yield  call(fetchEmployees);
    }
  } catch (error) {
    console.log(error);
  }
}

function* deleteEmployee(data) {
  try {
    const employees = yield call(deleteEmployeeApi,data);
    if (employees) {
      yield  call(fetchEmployees);
    }
  } catch (error) {
    console.log(error);
  }
}

function* employeesSaga() {
  yield takeLatest("FETCH_ALL_EMPLOYEES_REQUEST", fetchEmployees);
  yield takeLatest("CREATE_EMPLOYEE_REQUEST", createEmployees);
  yield takeLatest("DELETE_EMPLOYEE_REQUEST", deleteEmployee);
}

export default employeesSaga;
