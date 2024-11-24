import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerSignup from "./pages/CustomerSignup";
import CustomerLogin from "./pages/CustomerLogin";
import StaffLogin from "./pages/StaffLogin";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<CustomerSignup />}></Route>
        <Route path="/login" element={<CustomerLogin />}></Route>
        <Route path="/staff" element={<StaffLogin />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
