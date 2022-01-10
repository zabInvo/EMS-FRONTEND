import "./App.css";
import Login from "./components/admin/login";
import AdminLayout from "./components/admin/adminLayout";
import AdminDashboard from "./components/admin/adminDashboard";
import Companies from "./components/admin/companies";
import Employees from "./components/admin/employees";
import SalaryTable from "./components/admin/salary";
import AttendanceTable from "./components/admin/attendance";
import AdminSetting from "./components/admin/setting";

import EmployeeLogin from "./components/employee/login";
import EmployeeLayout from "./components/employee/employeeLayout";
import EmployeeDashboard from "./components/employee/dashboard";
import EmployeeSetting from "./components/employee/setting";
import EmployeeAttendanceTable from "./components/employee/attendance";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* EMPLOYEE ROUTES */}
        <Route path="/" element={<EmployeeLogin />} />
        <Route path="/" element={<EmployeeLayout />}>
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="attendance" element={<EmployeeAttendanceTable />} />
          <Route path="setting" element={<EmployeeSetting />} />
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLayout />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="company" element={<Companies />} />
          <Route path="employees" element={<Employees />} />
          <Route path="salary" element={<SalaryTable />} />
          <Route path="attendance" element={<AttendanceTable />} />
          <Route path="setting" element={<AdminSetting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
