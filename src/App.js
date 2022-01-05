import "./App.css";
import Login from "./components/admin/login";
import AdminDashboard from "./components/admin/dashboard";
import EmployeeLogin from "./components/employee/login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<EmployeeLogin />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="/admin">
          <Route index element={<Login />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
