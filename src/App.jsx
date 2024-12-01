import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerSignup from "./pages/CustomerSignup";
import CustomerLogin from "./pages/CustomerLogin";
import StaffLogin from "./pages/StaffLogin";
import AdminLogin from "./pages/AdminLogin";
import CustomerDash from "./pages/CustomerDash";
import CustomerSessions from "./pages/CustomerSessions";
import AccountType from "./pages/AccountType";
import StaffDash from "./pages/StaffDash";
import StaffSessions from "./pages/StaffSessions";
import AdminCustomers from "./pages/AdminCustomers";
import AdminStaff from "./pages/AdminStaff";
import AdminBookings from "./pages/AdminBookings";
import AddStaff from "./pages/AddStaff";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/account" element={<AccountType />}></Route>
        <Route path="/signup" element={<CustomerSignup />}></Route>
        <Route path="/login" element={<CustomerLogin />}></Route>
        <Route path="/staff" element={<StaffLogin />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/customer/dashboard" element={<CustomerDash />}></Route>
        <Route path="/customer/sessions" element={<CustomerSessions />}></Route>
        <Route path="/staff/dashboard" element={<StaffDash />}></Route>
        <Route path="/staff/sessions" element={<StaffSessions />}></Route>
        <Route path="/admin/customers" element={<AdminCustomers />}></Route>
        <Route path="/admin/staffs" element={<AdminStaff />}></Route>
        <Route path="/admin/sessions" element={<AdminBookings />}></Route>
        <Route path="/admin/add-staff" element={<AddStaff />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
